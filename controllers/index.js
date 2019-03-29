require("dotenv").config({ path: ".env" });
const express = require("express"),
  WeatherPost = require("../models/weather");
const fetch = require("node-fetch");
// const { check } = require("express-validator/check");

// WeatherPost.find({}, { city: 1, temperature: 1, _id: 0 })
//   .then(allData => {
//     console.log(allData);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//===keys===
const clientID = process.env.clientId,
  appId = process.env.appId,
  appCode = process.env.appCode;
module.exports = {
  weatherGet: (req, res) => {
    WeatherPost.find()
      .limit()
      .then(postsWeather => res.status(200).json(postsWeather))
      .catch(err =>
        res.status(500).json(err, { err: err }, console.log(err.msg))
      );
  },

  weatherGetId: (req, res) => {
    const postID = req.params.id;

    WeatherPost.findById(postID)
      .then(postsWeather => res.json(postsWeather))
      .catch(err =>
        res
          .status(404)
          .json({ nopostsfound: "No posts found" }, console.log(err))
      );
  },

  weatherPost: (req, res) => {
    const city = req.body.user.city;

    // if (!req.body.user.city) {
    //   res.status(500).json({ err: "empty" });
    // }
    const urls = [
      `https://api.unsplash.com/search/photos/?page=1&per_page=6&orientation=portrait&query=${city}&client_id=${clientID}`,

      `https://weather.api.here.com/weather/1.0/report.json?app_id=${appId}&app_code=${appCode}&product=observation&name=${city}`,

      `https://en.wikipedia.org/w/api.php?action=opensearch&search=${city}&format=json`
    ];

    //=====================================
    Promise.all(urls.map(url => fetch(url).then(res => res.json()))).then(
      ([api_1, api_2, api_3]) => {
        const displayImages = [];
        for (let i = 0; i < api_1.results.length; i++) {
          displayImages.push(api_1.results[i].urls.small);
        }

        const wiki = {
          info: api_3[2]
        };

        const { info } = wiki;
        console.log(info);

        const displayWeather = {
          temperature: Math.round(
            api_2.observations.location[0].observation[0].temperature
          ),
          city: api_2.observations.location[0].city,
          description:
            api_2.observations.location[0].observation[0].description,
          iconLink: api_2.observations.location[0].observation[0].iconLink,
          lat: parseInt(api_2.observations.location[0].observation[0].latitude),
          long: parseInt(
            api_2.observations.location[0].observation[0].longitude
          )
        };

        const {
          temperature,
          city,
          description,
          iconLink,
          lat,
          long
        } = displayWeather;

        const newWeather = {
          displayImages,
          temperature,
          description,
          iconLink,
          info,
          city,
          lat,
          long
        };

        WeatherPost.create(newWeather)
          .then(newCreatedWeather => {
            res.json(newCreatedWeather);
          })
          .catch(err => {
            res.status(404).json({ notfound: "No post found(weather)" });
            console.log(err);
          });
      }
    );
  }
};

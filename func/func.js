require("dotenv").config({ path: ".env" });
const express = require("express"),
  WeatherPost = require("../models/weather");
const fetch = require("node-fetch");

//===keys===
const clientID = process.env.clientId,
  appId = process.env.appId,
  appCode = process.env.appCode;
module.exports = {
  weatherPost: (req, res) => {
    const city = req.body.city;
    console.log(req.body);
    console.log(city);
    const urls = [
      `https://api.unsplash.com/search/photos/?page=1&per_page=6&orientation=portrait&query=${city}&client_id=${clientID}`,

      `https://weather.api.here.com/weather/1.0/report.json?app_id=${appId}&app_code=${appCode}&product=observation&name=${city}`
    ];

    //=====================================
    Promise.all(urls.map(url => fetch(url).then(res => res.json()))).then(
      ([api_1, api_2]) => {
        const displayImages = [];
        for (let i = 0; i < api_1.results.length; i++) {
          displayImages.push(api_1.results[i].urls.small);
        }

        const displayWeather = {
          temperature: Math.round(
            api_2.observations.location[0].observation[0].temperature
          ),
          city: api_2.observations.location[0].city,
          description:
            api_2.observations.location[0].observation[0].description,
          iconLink: api_2.observations.location[0].observation[0].iconLink
        };

        const { temperature, city, description, iconLink } = displayWeather;

        const newWeather = {
          displayImages,
          temperature,
          description,
          iconLink,
          city
        };

        WeatherPost.create(newWeather)
          .then(newCreatedWeather => {
            res.json(newCreatedWeather);
            console.log(newCreatedWeather);
          })
          .catch(err => {
            res.status(404).json({ notfound: "No post found(weather)" });
            console.log(err);
          });
      }
    );
  },

  weatherGet: (req, res) => {
    WeatherPost.find()
      .then(postsWeather => res.json(postsWeather))
      .catch(err =>
        res
          .status(404)
          .json({ nopostsfound: "No posts found" }, console.log(err))
      );
  }
};

require("dotenv").config({ path: ".env" });

const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose"),
  WeatherPost = require("../../models/weather");
fetch = require("node-fetch");

//===keys===
const clientID = process.env.clientId,
  appId = process.env.appId,
  appCode = process.env.appCode;

router.get("/", (req, res) => {
  WeatherPost.find()
    .then(postsWeather => res.json(postsWeather))
    .catch(err =>
      res.status(404).json({ nopostsfound: "No posts found" }, console.log(err))
    );
});

router.post("/weather", (req, res) => {
  let search = req.body.search;
  const urls = [
    `https://api.unsplash.com/search/photos/?page=1&per_page=6&orientation=portrait&query=Berlin&client_id=${clientID}`,
    `https://weather.api.here.com/weather/1.0/report.json?app_id=${appId}&app_code=${appCode}&product=observation&name=Berlin`
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
        description: api_2.observations.location[0].observation[0].description,
        iconLink: api_2.observations.location[0].observation[0].iconLink
      };

      const { temperature, city, description, iconLink } = displayWeather;

      const newWeather = {
        displayImages,
        temperature,
        city,
        description,
        iconLink,
        search: req.body.search,
        location
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
});

module.exports = router;

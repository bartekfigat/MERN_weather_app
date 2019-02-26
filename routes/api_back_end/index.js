require("dotenv").config({ path: ".env" });
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const fetch = require("node-fetch");

const clientID = process.env.clientId;
const appId = process.env.appId;
const appCode = process.env.appCode;

const urls = [
  `https://api.unsplash.com/search/photos/?page=1&per_page=6&orientation=portrait&query=warsaw&client_id=${clientID}`,
  `https://weather.api.here.com/weather/1.0/report.json?app_id=${appId}&app_code=${appCode}&product=observation&name=Berlin || ''`
];

function displayImages(api_1) {
  const displayImages = [];
  for (let i = 0; i < api_1.results.length; i++) {
    if (api_1.results.length[i] != 0) {
      displayImages.push(api_1.results[i].urls.small);
    } else {
      console.log("no photos");
    }
  }
}

function displayWeatherData(api_2) {
  const displayWeatherData = {
    temperature: Math.round(
      api_2.observations.location[0].observation[0].temperature
    ),
    city: api_2.observations.location[0].city,
    description: api_2.observations.location[0].observation[0].description,
    iconLink: api_2.observations.location[0].observation[0].iconLink
  };
}

router.get("/test", (req, res) =>
  //unsplash api

  Promise.all(urls.map(url => fetch(url).then(res => res.json())))
    .then(([api_1, api_2]) => {
      displayImages(api_1);
      displayWeatherData(api_2);

      res.status(status).json({ displayImages: displayImages(api_1) });
    })
    .catch(e => console.error(e))
);

module.exports = router;

const mongoose = require("mongoose");

// Create Schema

const WeatherPost = new mongoose.Schema({
  temperature: String,
  city: String,
  description: String,
  iconLink: String,
  displayImages: []
});

module.exports = mongoose.model("Post", WeatherPost);

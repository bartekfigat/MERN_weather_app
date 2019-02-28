const mongoose = require("mongoose");

// Create Schema

const WeatherPost = new mongoose.Schema({
  search: String,
  temperature: String,
  city: String,
  description: String,
  iconLink: String,
  displayImages: [],
  location: String
});

module.exports = mongoose.model("Post", WeatherPost);

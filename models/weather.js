const mongoose = require("mongoose");

// Create Schema

const WeatherPost = new mongoose.Schema({
  temperature: String,
  city: { type: String, required: true },
  description: String,
  iconLink: String,
  info: String,
  displayImages: {
    type: Array
  },
  date: { type: Date, default: Date.now },
  lat: Number,
  long: Number
});

module.exports = mongoose.model("Post", WeatherPost);

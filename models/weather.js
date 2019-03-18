const mongoose = require("mongoose");

// Create Schema

const WeatherPost = new mongoose.Schema({
  temperature: String,
  city: String,
  description: String,
  iconLink: String,
  info: String,
  displayImages: {
    type: Array,
    default:
      "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
  },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Post", WeatherPost);

require("dotenv").config({ path: ".env" });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");

const indexRoutes = require("./routes/api_back_end/index");
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB connect
const db =
  process.env.DB_PASSWOR || "mongodb://localhost:27017/mern_weather_app";
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("mongoDB connected");
  })
  .catch(err => {
    console.error(
      `message: ${err.message}  
       codeN:${err.codeName} 
       codeNumber:${err.code} 
       errName:${err.name}
      `
    );
  });

app.use(morgan("tiny"));

// Use Routes
app.use(indexRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running: ${port}`));

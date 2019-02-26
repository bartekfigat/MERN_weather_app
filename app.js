require("dotenv").config({ path: ".env" });
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require("./config/db");

//Routes require
const indexRoutes = require("./routes/api_back_end/index");

//set express to app
const app = express();

// Body parser middleware
// Use Routes
app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(morgan("tiny"))
  .use(indexRoutes);

//DB connect
db.dbConnection();

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running: ${port}`));

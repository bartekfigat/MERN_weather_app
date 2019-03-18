require("dotenv").config({ path: ".env" });
const express = require("express");
const weatherFunc = require("../../controllers/index");

router = express.Router();

router.get("/index", (req, res) => {
  weatherFunc.weatherGet(req, res);
});

router.get("/index/:id", (req, res) => {
  weatherFunc.weatherGetId(req, res);
});

router.post("/weather", (req, res) => {
  weatherFunc.weatherPost(req, res);
});

module.exports = router;

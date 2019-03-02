require("dotenv").config({ path: ".env" });
const weatherFunc = require("../../func/func");

const express = require("express");
router = express.Router();

router.get("/index", (req, res) => {
  weatherFunc.weatherGet(req, res);
});

router.post("/weather", (req, res) => {
  weatherFunc.weatherPost(req, res);
});

module.exports = router;

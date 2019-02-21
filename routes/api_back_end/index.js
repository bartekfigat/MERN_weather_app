const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/test", (req, res) => res.json({ test: "Works" }));
module.exports = router;

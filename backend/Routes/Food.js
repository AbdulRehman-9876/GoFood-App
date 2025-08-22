const express = require("express");
const router = express.Router();
const { addFood} = require("../Controller/FoodController");

router.post("/addFood", addFood);

module.exports = router;

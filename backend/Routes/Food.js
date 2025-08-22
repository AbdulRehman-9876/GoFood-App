const express = require("express");
const router = express.Router();
const { addFood, getFood} = require("../Controller/FoodController");

router.post("/addFood", addFood);
router.get("/getFood",getFood)

module.exports = router;

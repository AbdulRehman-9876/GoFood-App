import express from "express";
import { addFood, getFood } from "../Controller/FoodController.js";
const router = express.Router();

router.post("/addFood", addFood);
router.get("/getFood",getFood)

export default router;

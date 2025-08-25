const mongoose = require("mongoose");

const { Schema } = mongoose;
import image from "../../src/Assets/restaurantPic_2.jpg";
const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    default: image,
  },
  reviews: {
    type: Number,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("restaurant", RestaurantSchema);

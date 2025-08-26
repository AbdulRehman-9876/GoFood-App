const mongoose = require("mongoose");
const { Schema } = mongoose;
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
    required: true,
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

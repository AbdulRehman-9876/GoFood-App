const mongoose = require("mongoose");

const { Schema } = mongoose;

const FoodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("food", FoodSchema);


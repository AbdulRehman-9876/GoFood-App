import mongoose from "mongoose";

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
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "restaurant", // references the Restaurant model
    required: true,
  },
});

export default mongoose.model("food", FoodSchema);

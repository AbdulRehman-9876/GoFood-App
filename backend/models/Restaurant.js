import mongoose from "mongoose";
import { Schema } from "mongoose";

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ownder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  location: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    required: true,
  },
  openingHours: {
    open: { type: String, required: true },
    close: { type: String, required: true }, // { open: "9:00", close: "22:00" }
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  menu: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "food",
    },
  ],
});

export default mongoose.model("restaurant", RestaurantSchema);

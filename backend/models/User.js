const mongoose = require("mongoose");

const { Schema } = mongoose;
import photo from "../../src/Assets/defaultImage.jpg";
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: photo,
  },
  location: {
    type: String,
    default: "Pakistan",
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "Customer",
  },
  accountCreationDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", UserSchema);

const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;

const mongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected Successfully");
    fetchData();
  } catch (err) {
    console.error("Error:", err);
  }
};

// Separate function to fetch data
const fetchData = async () => {
  try {
    const fetched_data = mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    // console.log(data);
  } catch (err) {
    console.error("Error in fetching data:", err);
  }
};

module.exports = mongoDB;

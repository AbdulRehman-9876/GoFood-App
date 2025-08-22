const Food = require("../models/Food");

const addFood = async (req, res) => {
  try {
    const { name, category, image, description, price } = req.body;
    const newFood = new Food({
      name: name,
      category: category,
      image: image,
      description: description,
      price: price,
    });
    await newFood.save();
    res.status(200).json({ message: "Food Successfully Added" });
  } catch (err) {
    console.log(err);
    res.status(400);
  }
};

const getFood = async (req, res) => {
  try {
    const food = await Food.find();
    res.status(200).json(food);
  } catch (err) {
    console.log(err);
    res.status(400);
  }
};
module.exports = {
  addFood,
  getFood,
};

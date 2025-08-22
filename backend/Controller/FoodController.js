const Food = require("../models/Food");

const addFood = async(req, res) => {
    try{
        const {name, category, image, description, price } = req.body;
        const newFood = new Food({
             name: name,
             category: category,
             image: image, 
             description: description,
             price: price,
        })
        newFood.save();
        res.status(200).json({ message: "Food Successfully Added" });
    }catch(err){
        console.log(err)
        res.status(400);
    }
}

module.exports = {
    addFood
}
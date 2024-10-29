const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://abdulrehman9876:kpwlM63jCUOYhgLd@cluster0.km0gw.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected Successfully");

        // Fetch data after confirming the connection
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

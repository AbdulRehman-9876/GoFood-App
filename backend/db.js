const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://abdulrehman9876:kpwlM63jCUOYhgLd@cluster0.km0gw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected Successfully");
    } catch (err) {
        console.error("Error:", err);
    }
};

module.exports = mongoDB;

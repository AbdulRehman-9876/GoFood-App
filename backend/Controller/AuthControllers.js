const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); //for login
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

const registerUser = async (req, res) => {
  try {
    const { email, name, password, number } = req.body;
    const salt = await bcrypt.genSalt(10);
    let securePassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name: name,
      email: email,
      password: securePassword,
      mobileNumber: number,
    });

    await newUser.save();
    res.status(200).json({ message: "User Successfully Created" });
  } catch (err) {
    res.status(400).json({ message: "Error in Creating User" });
    console.log(err);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await User.findOne({ email });
    const passwordCompare = await bcrypt.compare(password, userData.password);
    if (!passwordCompare) {
      return res.status(400).json({ errors: "Incorrect Password" });
    }

    const authToken = jwt.sign({ id: userData.id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.json({ authToken, userData: {
    name: userData.name, 
    mobileNumber: userData.mobileNumber,
    email: userData.email,
    profilePicture: userData.profilePicture,
    location: userData.location,
    accountCreationDate: userData.accountCreationDate
    } });
  } catch (err) {
    res.json({ success: false });
    console.log(err);
  }
};

module.exports = {
  registerUser,
  loginUser,
};

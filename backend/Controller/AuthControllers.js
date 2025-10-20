import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

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

    if (!userData) {
      return res.status(400).json({ errors: "User not found" });
    }

    const passwordCompare = await bcrypt.compare(password, userData.password);
    if (!passwordCompare) {
      return res.status(400).json({ errors: "Incorrect Password" });
    }

    const authToken = jwt.sign(
      {
        _id: userData._id,
        name: userData.name,
        mobileNumber: userData.mobileNumber,
        email: userData.email,
        profilePicture: userData.profilePicture,
        location: userData.location,
        accountCreationDate: userData.accountCreationDate,
        role: userData.role,
      },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return res.json({
      authToken,
      sucess: true,
    });
  } catch (err) {
    console.error(err);
    res.json({ success: false });
  }
};

export { registerUser, loginUser };

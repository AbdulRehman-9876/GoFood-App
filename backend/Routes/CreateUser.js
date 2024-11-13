const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

const jwt = require("jsonwebtoken"); //for login
const bcrypt = require("bcryptjs"); //for password
const jwtSecret = "secretisgoingtobeverysecretnowhe"

router.post(
  "/create-user",
  body("email").isEmail(),
  body("name").isLength({ min: 5 }),
  body("password", "Incorrect Password").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let securePassword = await bcrypt.hash(req.body.password,salt);

    try {
      await User.create({
        //syntax to add data in static mannner

        //   name: "Abdul Rehman",
        //   password: "123456",
        //   email: "arb@gmail.com",
        //   location: "Mars",

        //syntax to add data using json format (in thunderclient for now)
        name: req.body.name,
        password: securePassword, //secure password sent
        email: req.body.email,
        location: req.body.location,
      }).then(res.json({ success: true }));
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/login-user",
  body("email").isEmail(),
  body("password", "Incorrect Password").isLength({ min: 5 }),
  async (req, res) => {
    let email = req.body.email;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let userData = await User.findOne({ email });

      if (!userData) {
        return res.status(400).json({ errors: "Incorrect Email" });
      }

      const passwordCompare = await bcrypt.compare(req.body.password,userData.password);

      if (!passwordCompare) {
        return res.status(400).json({ errors: "Incorrect Password" });
      }

      const data = {
        user:{
          id: userData.id
        }
      }

      const authToken = jwt.sign(data,jwtSecret);

      return res.json({ success: true,authToken :authToken});
      
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;

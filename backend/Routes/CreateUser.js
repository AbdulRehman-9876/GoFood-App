const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');

router.post("/create-user",
  body('email').isEmail(), 
  body('name').isLength({min: 5}),
  body('password','Incorrect Password').isLength({min: 5})
  , async (req, res) => {
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()});
    }
  try {
    await User.create({
      //syntax to add data in static mannner

      //   name: "Abdul Rehman",
      //   password: "123456",
      //   email: "arb@gmail.com",
      //   location: "Mars",

      //syntax to add data using json format (in thunderclient for now)
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      location: req.body.location
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;

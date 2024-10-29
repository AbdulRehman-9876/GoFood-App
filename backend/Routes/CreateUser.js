const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/create-user", async (req, res) => {
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

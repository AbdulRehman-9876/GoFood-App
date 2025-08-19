const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../Controller/AuthControllers");

router.post("/create-user", registerUser);
router.post("/login-user", loginUser);

module.exports = router;

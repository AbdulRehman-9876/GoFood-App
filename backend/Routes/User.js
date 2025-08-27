const express = require("express");
const router = express.Router();
const { updatePersonalInformation } = require("../Controller/userController");

router.patch("/PersonalInformation/:id", updatePersonalInformation);

module.exports = router;

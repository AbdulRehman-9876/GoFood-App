const express = require("express");
const router = express.Router();
const { updatePersonalInformation } = require("../Controller/userController");

router.post("/PersonalInformation", updatePersonalInformation);

module.exports = router;

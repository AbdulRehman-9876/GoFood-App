import express from "express";
import { updatePersonalInformation } from "../Controller/userController.js";
const router = express.Router();

router.patch("/PersonalInformation/:id", updatePersonalInformation);

export default router;

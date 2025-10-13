import express from "express";
import dotenv from "dotenv";
import mongoDB from "./db.js";
import cors from "cors";

import Auth from "./Routes/Auth.js";
import Food from "./Routes/Food.js";
import User from "./Routes/User.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(cors());
mongoDB(); //mongodb connection

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

//routes 
app.use("/api", Auth);
app.use("/food", Food);
app.use("/user", User);

app.listen(PORT, () => {
  console.log(`---- Backend listening on port ${PORT} ----`);
});
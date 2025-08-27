const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const mongoDB = require("./db");
var cors = require('cors')
app.use(cors())

mongoDB();

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

app.use("/api", require("./Routes/Auth"));
app.use("/food", require("./Routes/Food"));
app.use("/user", require("./Routes/User"));


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

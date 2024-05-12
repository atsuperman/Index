
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const user = require("./models/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
});
let db = mongoose.connection;
db.once("open", () => console.log("MongoDB connected Successfully!"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

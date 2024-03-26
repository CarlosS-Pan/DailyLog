const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri =
  "mongodb+srv://root:e0ZYdBvlxWtGfmmV@daily-log-mern.kq2ii3r.mongodb.net/?retryWrites=true&w=majority&appName=Daily-Log-MERN";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

app.get("/prueba", (req, res) => {
  res.json({ x: ["Carlos", "Axa", "Sigfredo"] });
});

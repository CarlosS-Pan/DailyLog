require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const tasksRoutes = require("./routes/tasks");

// express app
const app = express();

// listening port
const PORT = process.env.PORT;
const uri = process.env.MONGO_URI;

//  middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(tasksRoutes);
app.use("/api/logs", tasksRoutes);

mongoose
  .connect(uri)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log("Connected to DB & started on port", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

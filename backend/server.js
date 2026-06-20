const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Task = require("./models/Task");
console.log(Task);

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


app.get("/tasks", async (req, res) => {
  try {
    console.log("Task type:", typeof Task);
    console.log(Task);

    const tasks = await Task.find();

    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message
    });
  }
});

// ADD TASK
app.post("/tasks", async (req, res) => {
  const task = new Task({
    title: req.body.title
  });

  await task.save();
  res.status(201).json(task);
});


// UPDATE TASK
app.put("/tasks/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(task);
});


// DELETE TASK
app.delete("/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);

  res.json({
    message: "Task Deleted"
  });
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
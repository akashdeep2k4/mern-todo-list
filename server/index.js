import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import todoModel from "./models/todo.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://akashdeep2k4:pidDS9hbbuI6VpBx@cluster2k4.usg3hlk.mongodb.net/mern-todo-list?retryWrites=true&w=majority&appName=Cluster2k4");

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/get", (req, res) => {
  todoModel
    .find()
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  todoModel
    .findByIdAndUpdate({ _id: id }, { done: true })
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  todoModel
    .findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

app.post("/add", (req, res) => {
  const task = req.body.task;
  todoModel
    .create({
      task: task,
    })
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

app.listen(3000, () => {
  console.log("Server is Running");
});

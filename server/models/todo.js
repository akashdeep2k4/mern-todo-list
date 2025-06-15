import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  task: String,
  done: {
    type: Boolean,
    default: false,
  },
});

const todoModel = mongoose.model("todo", todoSchema);

export default todoModel;

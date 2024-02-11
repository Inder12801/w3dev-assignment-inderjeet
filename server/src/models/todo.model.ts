import mongoose from "mongoose";

export interface TodoType {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

const todoSchema = new mongoose.Schema<TodoType>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model<TodoType>("Todo", todoSchema);

export default Todo;

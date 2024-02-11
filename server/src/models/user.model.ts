import mongoose from "mongoose";
import { TodoType } from "./todo.model";

export interface UserType {
  id: string;
  name: string;
  email: string;
  password?: string;
  token: string;
  todos: TodoType[];
}

const userSchema = new mongoose.Schema<UserType>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Todo" }],
});

const User = mongoose.model<UserType>("User", userSchema);

export default User;

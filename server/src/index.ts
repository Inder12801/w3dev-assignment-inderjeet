import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route";
import connectToDB from "./config/connectToDB";

const app = express();
const port = 3000;

// json handler
app.use(express.json());

// cors handler
app.use(cors());
// dotenv handler
dotenv.config();

app.use(express.urlencoded({ extended: true }));

// connect to database
connectToDB();

app.get("/", (req, res) => {
  res.send("Hello World of Coding!");
});
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World of Coding!");
});

// routes
app.use("/api/auth/", authRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

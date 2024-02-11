import express, { Request, Response } from "express";
// import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model"; // Import your User model

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET as string; // Retrieve JWT secret from environment variable

router.post("/register", async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // Validate inputs
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({ name, email, password });
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    // Respond with created user and token
    res.status(201).json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/login", (req, res) => {
  res.send("Login route");
});

export default router;

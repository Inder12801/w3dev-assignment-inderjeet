import express from "express";
// import { verify } from "jsonwebtoken";
import User from "../models/user.model";

// Interface for your token payload (adjust according to your structure)
interface TokenPayload {
  userId: string;
  // ... other token data
}

export const authMiddleware: express.RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    // Extract token from authorization header
    const token = req.headers.authorization?.split(" ")[1];

    // Check if token exists
    if (!token) {
      throw new Error("Unauthorized: Missing access token");
    }

    // Verify token using your secret key and defined payload structure
    // const decoded = verify(token, "your_secret_key") as TokenPayload;

    // Check if user exists based on the payload data (replace with your logic)
    // const user = await User.findById(decoded.userId);
    // if (!user) {
    //   throw new Error("Unauthorized: Invalid token");
    // }

    // Attach user object to the request for access in route handlers
    // req.user = user;

    // Continue to the next middleware or route handler
    next();
  } catch (error: any) {
    // Handle errors appropriately, send error response with status code
    res.status(401).json({ message: error.message });
  }
};

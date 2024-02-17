import { connect } from "mongoose";
import process from "process";
import dotenv from "dotenv";

dotenv.config();

// Replace with your connection URI
const MONGO_URI = process.env.MONGO_URI as string;

const connectToDB = async (): Promise<void> => {
  try {
    await connect(MONGO_URI, {});
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit with error code 1 if connection fails
  }
};

export default connectToDB;

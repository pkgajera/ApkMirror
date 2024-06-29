import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connections[0]?.readyState) {
      console.log("Using existing database connection");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection established successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
};

export default connectDB;

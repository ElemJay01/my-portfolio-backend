import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" })); // change origin if front is elsewhere
app.use(express.json());

// ROUTES
import imageRoutes from "./Routes/imageRoutes.js";

app.use("/api/images", imageRoutes);

// connect & start
const PORT = process.env.PORT || 5000;
console.log("MONGO_URI from .env:", JSON.stringify(process.env.MONGO_URI));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    console.log("📦 Connected to DB:", mongoose.connection.db.databaseName);
    app.listen(PORT, (req, res) =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

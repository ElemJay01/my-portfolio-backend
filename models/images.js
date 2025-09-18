import mongoose from "mongoose";

// Image model
const imageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    fullUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.connection.model(
  "Image",
  imageSchema,
  "portfolioImages"
);

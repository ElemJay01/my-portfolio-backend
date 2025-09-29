import express from "express";
import Image from "../models/images.js";

const router = express.Router();

// GET /api/images - fetch all images
router.get("/", async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST add image via JSON { title, description, url }
router.post("/", async (req, res) => {
  const { title, description, thumbnailUrl, fullUrl } = req.body;
  if (!thumbnailUrl || !fullUrl) {
    return res.status(400).json({ error: "url is required" });
  }
  const image = new Image({ title, description, thumbnailUrl, fullUrl });
  await image.save();
  res.status(201).json(image);
});

export default router;

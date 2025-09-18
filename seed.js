import mongoose from "mongoose";
import dotenv from "dotenv";
import Image from "./models/images.js";

dotenv.config();

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  await Image.deleteMany();

  const images = [
    {
      title: "Sample 1",
      description: "Sample image 1",
      url: "https://picsum.photos/800/600?random=1",
    },
    {
      title: "Sample 2",
      description: "Sample image 2",
      url: "https://picsum.photos/800/600?random=2",
    },
    {
      title: "Sample 3",
      description: "Sample image 3",
      url: "https://picsum.photos/800/600?random=3",
    },
    {
      title: "Sample 4",
      description: "Sample image 4",
      url: "https://picsum.photos/800/600?random=4",
    },
    {
      title: "Sample 5",
      description: "Sample image 5",
      url: "https://picsum.photos/800/600?random=5",
    },
    {
      title: "Sample 6",
      description: "Sample image 6",
      url: "https://picsum.photos/800/600?random=6",
    },
  ];

  await Image.insertMany(images);
  console.log("Seed complete");
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});

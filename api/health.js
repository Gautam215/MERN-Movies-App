import mongoose from "mongoose";
import { connectDB } from "../backend/app.js";

export default async function handler(req, res) {
  try {
    await connectDB();

    return res.status(200).json({
      ok: true,
      service: "movies-api",
      mongoConfigured: Boolean(process.env.MONGO_URI),
      mongoState: mongoose.connection.readyState,
      database: mongoose.connection.name || null,
    });
  } catch (error) {
    console.error("Health check failed:", error);
    return res.status(500).json({
      ok: false,
      service: "movies-api",
      mongoConfigured: Boolean(process.env.MONGO_URI),
      error: error.message,
    });
  }
}

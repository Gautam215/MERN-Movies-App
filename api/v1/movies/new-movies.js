import { connectDB } from "../../../../backend/app.js";
import { getNewMovies } from "../../../../backend/controllers/movieController.js";

export default async function handler(req, res) {
  try {
    await connectDB();
    return getNewMovies(req, res);
  } catch (error) {
    console.error("new-movies API error:", error);
    return res.status(500).json({ message: "Movies API failed", error: error.message });
  }
}

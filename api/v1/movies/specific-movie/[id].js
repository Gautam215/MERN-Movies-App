import { connectDB } from "../../../../../backend/app.js";
import { getSpecificMovie } from "../../../../../backend/controllers/movieController.js";

export default async function handler(req, res) {
  try {
    await connectDB();
    req.params = { ...(req.params || {}), id: req.query.id };
    return getSpecificMovie(req, res);
  } catch (error) {
    console.error("specific-movie API error:", error);
    return res.status(500).json({ message: "Movie API failed", error: error.message });
  }
}

import { connectDB } from "../backend/app.js";

export default async function handler(req, res) {
  try {
    await connectDB();
    res.status(200).json({ ok: true, service: "movies-api" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: error.message });
  }
}

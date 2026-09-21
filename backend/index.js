import "dotenv/config";
import app, { connectDB } from "./app.js";

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

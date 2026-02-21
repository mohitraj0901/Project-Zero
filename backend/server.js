import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import postRoutes from "./routes/postRoutes.js";
dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

const PORT = process.env.PORT ||5000;
import authRoutes from "./routes/authRoutes.js";
import { protect } from "./middleware/authMiddleware.js";

app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

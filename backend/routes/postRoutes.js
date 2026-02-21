import express from "express";
import { createPost, toggleLike, getPosts } from "../controllers/postController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/")
  .post(protect, createPost)
  .get(getPosts);
  router.put("/:id/like", protect, toggleLike);

export default router;
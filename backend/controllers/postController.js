import Post from "../models/Post.js";

// @desc    Create a post
// @route   POST /api/posts
// @access  Private
const createPost = async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: "Post content required" });
  }

  const post = await Post.create({
    content,
    user: req.user._id, // from middleware
  });

  res.status(201).json(post);
};

// @desc    Get all posts
// @route   GET /api/posts
// @access  Public
export const toggleLike = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const userId = req.user._id;

    const alreadyLiked = post.likes.includes(userId);

    if (alreadyLiked) {
      // Unlike
      post.likes = post.likes.filter(
        (id) => id.toString() !== userId.toString()
      );
    } else {
      // Like
      post.likes.push(userId);
    }

    await post.save();

    res.status(200).json({
      likesCount: post.likes.length,
      liked: !alreadyLiked,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getPosts = async (req, res) => {
  const posts = await Post.find()
    .populate("user", "name email")
    .sort({ createdAt: -1 });

  res.json(posts);
};

export { createPost, getPosts };
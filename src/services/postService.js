import API from "../api/axios";

// Get all posts
export const getPosts = async () => {
  const res = await API.get("/api/posts");
  return res.data;
};

// Create post
export const createPost = async (content) => {
  const res = await API.post("/api/posts", { content });
  return res.data;
};
export const toggleLike = async (postId) => {
  const res = await API.put(`/api/posts/${postId}/like`);
  return res.data;
};
import axios from "axios";

const API = axios.create({
  baseURL:  "https://project-zero-1a6h.onrender.com/",
});

// Automatically attach token if exists
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
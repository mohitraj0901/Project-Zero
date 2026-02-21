import API from "../api/axios";

// Register
export const registerUser = async (data) => {
  const res = await API.post("/api/auth/register", data);
  localStorage.setItem("token", res.data.token);
  return res.data;
};

// Login
export const loginUser = async (email, password) => {
  const res = await API.post("/api/auth/login", {
    email,
    password,
  });
  return res.data;
};
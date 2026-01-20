import axios from "axios";

const API_URL = "http://localhost:3001/users";

/* SIGN UP */
export const signup = async (userData) => {
  const existing = await axios.get(`${API_URL}?email=${userData.email}`);
  if (existing.data.length > 0) {
    throw new Error("Email already registered");
  }

  const res = await axios.post(API_URL, {
    ...userData,
    isSignIn: true
  });

  localStorage.setItem("user", JSON.stringify(res.data));
  return res.data;
};

export const signin = async (email, password) => {
  const res = await axios.get(
    `${API_URL}?email=${email}&password=${password}`
  );

  if (res.data.length === 0) {
    throw new Error("Invalid email or password");
  }

  const user = res.data[0];

  await axios.patch(`${API_URL}/${user.id}`, {
    isSignIn: true
  });

  localStorage.setItem("user", JSON.stringify(user));
  return user;
};

export const signout = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return;

  await axios.patch(`${API_URL}/${user.id}`, {
    isSignIn: false
  });

  localStorage.removeItem("user");
};

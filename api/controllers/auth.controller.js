import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    res.status(400).json({ msg: "All fields are required" });
  }

  const newUser = new User({
    username,
    email,
    password,
  });

  try {
    await newUser.save();
    res.json({ msg: "Signup successful" });
  } catch (error) {
    res.status(500).json({ msg: "error user signup" });
  }
};

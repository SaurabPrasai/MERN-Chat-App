import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: "User doesn't exist" });

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ error: "Invalid credentials" });

    const { password: pass, ...rest } = user._doc;

    generateTokenAndSetCookie(user._id, res);

    res.status(201).json(rest);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const signup = async (req, res) => {
  const { fullName, username, password, confirmPassword, gender } = req.body;

  if (password !== confirmPassword)
    return res.status(400).json({ error: "Password don't match" });

  let user = await User.findOne({ username });

  if (user) return res.status(400).json({ error: "User already exist" });

  try {
    // hash password
    const hashPassword = bcrypt.hashSync(password, 10);

    const boyProfilePic = "https://avatar.iran.liara.run/public/boy";
    const girlProfilePic = "https://avatar.iran.liara.run/public/girl";

    const newUser = new User({
      fullName,
      username,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if (newUser) generateTokenAndSetCookie(newUser._id, res);
    const saveUser = await newUser.save();
    const { password: pass, ...rest } = saveUser._doc;
    res.status(201).json(rest);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const logout = async (req, res) => {
  try {
      res.cookie("access-token","",{maxAge:0}).status(200).json({message:"Logged out successfully "})
  } catch (error) {
    res.status(500).json(error.message);
      
  }
};

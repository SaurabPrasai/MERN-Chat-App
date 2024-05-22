import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import errorHandler from "../utils/error.js";

export const login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return next(errorHandler(400, "User doesn't exist"));

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);

    if (!isPasswordCorrect)
      return next(errorHandler(401, "Invalid credentials"));

    const { password: pass, ...rest } = user._doc;

    generateTokenAndSetCookie(user._id, res);

    res.status(201).json(rest);
  } catch (error) {
    next(error);
  }
};

export const signup = async (req, res,next) => {
  const { fullName, username, password, confirmPassword, gender } = req.body;

  if (password !== confirmPassword) return next(errorHandler(400, "Password don't match"));

  let user = await User.findOne({ username });

  if (user) return next(errorHandler(400, "User already exist"));

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
    next(error);
  }
};

export const logout = async (req, res,next) => {
  try {
    res
      .cookie("access-token", "", { maxAge: 0 })
      .status(200)
      .json({ message: "Logged out successfully " });
  } catch (error) {
    next(error);
  }
};

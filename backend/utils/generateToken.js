import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({userId}, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("access-token", token, {
    maxAge: 15 * 60 * 60 * 24 * 1000,
    httpOnly: true,
    sameSite: "strict",
  });
};


export default generateTokenAndSetCookie
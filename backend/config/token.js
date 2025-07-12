import jwt from "jsonwebtoken";

const genToken = (user) => {
  return jwt.sign(
    { userId: user._id.toString(), email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

export default genToken;

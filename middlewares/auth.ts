import express from "express";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config({ path: ".env.local" });
const jwtKey = process.env.JWT_SECRET_KEY;
const verifyToken = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    if (!jwtKey) throw new Error("JWT secret key not defined");
    jwt.verify(token, jwtKey, (err, user) => {
      if (err) {
        return res
          .status(403)
          .json({ status: "error", message: "Invalid token." });
      }
      // const currentUser = user;
      next();
    });
  } else {
    res.status(401).json({ status: "error", message: "No token provided." });
  }
};
export default verifyToken;

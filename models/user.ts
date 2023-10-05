import { pool } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userQueries } from "../helpers/queries";
import { config } from "dotenv";
config({ path: ".env.local" });

const jwtKey = process.env.JWT_SECRET_KEY;
interface user {
  name: string;
  email: string;
  password: string;
  newPassword: string;
}

const getUserContext = async (token: string) => {
  try {
    const decodedToken = jwt.decode(token);
    if (typeof decodedToken === "object" && decodedToken !== null) {
      const userId = decodedToken.id;
      const result = await pool.query(userQueries.getUserById, [userId]);
      return result.rows[0];
    }
  } catch (error) {
    throw error;
  }
};

// Get All Users
const getAllUser = async () => {
  try {
    const result = await pool.query(userQueries.getAllUser);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

// Get User By Id
const getUserById = async (id: string) => {
  try {
    const result = await pool.query(userQueries.getUserById, [id]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

// Sign Up User
const signUpUser = async (User: user) => {
  const { name, email, password } = User;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const result = await pool.query(userQueries.createUser, [
      name,
      email,
      hashedPassword,
    ]);
    return result;
  } catch (error) {
    throw error;
  }
};

// Login User
const loginUser = async (User: user) => {
  const { email, password } = User;
  const result = await pool.query(userQueries.getUser, [email]);
  if (result.rows.length > 0) {
    const user = result.rows[0];
    const userId = user.id;
    const name = user.name;
    const email = user.email;
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      if (!jwtKey) throw new Error("JWT secret key not defined");
      const token = jwt.sign({ id: userId }, jwtKey, {
        expiresIn: "1h",
      });
      return { flag: 200, token, userId, name, email };
    } else {
      return { flag: 401 };
    }
  } else {
    return { flag: 404 };
  }
};

// Delete User By Id
const deleteUser = async (id: string) => {
  try {
    const result = await pool.query(userQueries.deleteUser, [id]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

// Update User Password
const updatePassword = async (User: user) => {
  const { email, newPassword } = User;
  const result = await pool.query(userQueries.getUser, [email]);
  if (result.rows.length > 0) {
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    await pool.query(userQueries.updatePassword, [hashedNewPassword, email]);
    return { status: "success", message: "Password updated" };
  } else {
    return { status: "success", message: "User not found" };
  }
};

export {
  getUserContext,
  signUpUser,
  loginUser,
  deleteUser,
  updatePassword,
  getAllUser,
  getUserById,
};

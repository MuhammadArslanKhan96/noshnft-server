import express from "express";
import {
  signUpUser,
  loginUser,
  deleteUser,
  updatePassword,
  getAllUser,
  getUserById,
  getUserContext,
} from "../models/user";

export const getAllUserController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await getAllUser();
    res
      .status(201)
      .json({ status: "Success", message: "User fetched.", result });
  } catch (error) {
    res.status(401).send(error);
  }
};

export const getUserContextController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await getUserContext(req.headers.authorization as string);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getUserByIdController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const id = req.params.id;
    const result = await getUserById(id);
    res
      .status(201)
      .json({ status: "Success", message: "User fetched.", result });
  } catch (error) {
    res.status(401).send(error);
  }
};

export const signUpUserController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await signUpUser(req.body);
    res.status(201).json({ status: "Success", message: "User added.", result });
  } catch (error) {
    res.status(401).json({ status: "Error", message: "Email already exists." });
  }
};

export const loginUserController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await loginUser(req.body);
    if (result.flag == 200) {
      res.status(200).json({
        status: "Success",
        message: "Logged in",
        result,
      });
    }
    if (result.flag == 401) {
      res.status(401).json({ status: "Error", message: "Invalid credentials" });
    }
    if (result.flag == 404) {
      res.status(404).json({ status: "Error", message: "User not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteUserController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const id = req.params.id;
    const result = await deleteUser(id);
    res
      .status(200)
      .json({ status: "Success", message: "User deleted", result });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updatePasswordController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await updatePassword(req.body);
    if (result.message === "Password updated") {
      res.status(200).json({ status: "Success", message: "Password updated" });
    } else if (result.message === "User not found") {
      res.status(401).json({ status: "Error", message: "User not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

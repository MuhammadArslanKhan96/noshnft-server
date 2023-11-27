import express from "express";
import * as model from "../models/user";

// export const getAllUser = async (
//   req: express.Request,
//   res: express.Response
// ) => {
//   try {
//     const result = await model.getAllUser();
//     res
//       .status(201)
//       .json({ status: "Success", message: "User fetched.", result });
//   } catch (error) {
//     res.status(401).send(error);
//   }
// };

export const getUserContext = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await model.getUserContext(
      req.headers.authorization as string
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUserById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const id = req.params.id;
    const result = await model.getUserById(id);
    res
      .status(201)
      .json({ status: "Success", message: "User fetched.", result });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const signUpUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await model.signUpUser(req.body);
    res.status(201).json({ status: "Success", message: "User added.", result });
  } catch (error) {
    res.status(401).json({ status: "Error", message: "Email already exists." });
  }
};

export const loginUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await model.loginUser(req.body);
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

// export const deleteUser = async (
//   req: express.Request,
//   res: express.Response
// ) => {
//   try {
//     const id = req.params.id;
//     const result = await model.deleteUser(id);
//     res
//       .status(200)
//       .json({ status: "Success", message: "User deleted", result });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

export const updatePassword = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await model.updatePassword(req.body);
    if (result.message === "Password updated") {
      res.status(200).json({ status: "Success", message: "Password updated" });
    } else if (result.message === "User not found") {
      res.status(401).json({ status: "Error", message: "User not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await model.updateUser(req.body, req.params.id);
    res
      .status(200)
      .json({ status: "Success", message: "User updated", result });
  } catch (error) {
    res.status(500).send(error);
  }
};

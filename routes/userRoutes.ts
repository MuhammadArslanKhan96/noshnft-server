import express from "express";
import {
  signUpUserController,
  loginUserController,
  updatePasswordController,
  deleteUserController,
  getAllUserController,
  getUserByIdController,
} from "../controllers/userController";
import verifyToken from "../middlewares/auth";
const userRouter = express.Router();

userRouter.post("/signup", signUpUserController);
userRouter.post("/login", loginUserController);
userRouter.get("/get", getAllUserController);
userRouter.get("/get/:id", getUserByIdController);
userRouter.delete("/delete-user/:id", verifyToken, deleteUserController);
userRouter.put("/update-password", updatePasswordController);

export default userRouter;

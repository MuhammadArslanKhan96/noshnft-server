import express from "express";
import {
  signUpUserController,
  loginUserController,
  updatePasswordController,
  deleteUserController,
  getAllUserController,
  getUserByIdController,
  getUserContextController,
  updateUserController,
} from "../controllers/userController";
import verifyToken from "../middlewares/auth";
const userRouter = express.Router();

userRouter.post("/signup", signUpUserController);
userRouter.post("/login", loginUserController);
userRouter.get("/get", getAllUserController);
userRouter.get("/get/:id", getUserByIdController);
userRouter.get("/get-context", getUserContextController);
userRouter.delete("/delete-user/:id", verifyToken, deleteUserController);
userRouter.put("/update-password", updatePasswordController);
userRouter.put("/update-user/:id", updateUserController);

export default userRouter;

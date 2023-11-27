import express from "express";
import * as controller from "../controllers/userController";
import verifyToken from "../middlewares/auth";
const userRouter = express.Router();

userRouter.post("/signup", controller.signUpUser);
userRouter.post("/login", controller.loginUser);
// userRouter.get("/get", controller.getAllUser);
userRouter.get("/get/:id", controller.getUserById);
userRouter.get("/get-context", controller.getUserContext);
// userRouter.delete("/delete-user/:id", verifyToken, controller.deleteUser);
userRouter.put("/update-password", controller.updatePassword);
userRouter.put("/update-user/:id", verifyToken, controller.updateUser);

export default userRouter;

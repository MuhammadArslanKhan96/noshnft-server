import express from "express";
import {
  checkFollowingController,
  createFollowController,
  deleteFollowController,
  getFollowerController,
  getFollowingController,
} from "../controllers/followController";
const followRouter = express.Router();
followRouter.post("/create/", createFollowController);
followRouter.delete("/delete/", deleteFollowController);
followRouter.get("/get-follower/:id", getFollowerController);
followRouter.get("/get-following/:id", getFollowingController);
followRouter.post("/check/", checkFollowingController);

export default followRouter;

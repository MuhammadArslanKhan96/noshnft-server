import express from "express";
import * as controller from "../controllers/followController";
const followRouter = express.Router();

followRouter.post("/create/", controller.createFollow);
followRouter.delete("/delete/", controller.deleteFollow);
followRouter.get("/get-follower/:id", controller.getFollower);
followRouter.get("/get-following/:id", controller.getFollowing);
followRouter.post("/check/", controller.checkFollowing);

export default followRouter;

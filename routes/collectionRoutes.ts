import express from "express";
import * as controllers from "../controllers/collectionController";
import verifyToken from "../middlewares/auth";
const collectionRouter = express.Router();

collectionRouter.post("/create/:id", verifyToken, controllers.createCollection);
// collectionRouter.delete("/delete/:id", controllers.deleteCollection);
collectionRouter.get("/get/:id", verifyToken, controllers.getCollection);
collectionRouter.get("/getAll", controllers.getAllCollection);
collectionRouter.get(
  "/get-user/:id",
  verifyToken,
  controllers.getCollectionByUserId
);

export default collectionRouter;

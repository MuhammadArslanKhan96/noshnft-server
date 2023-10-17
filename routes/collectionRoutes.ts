import express from "express";
import {
  createCollectionController,
  deleteCollectionController,
  getCollectionController,
  getAllCollectionController,
  getCollectionByUserIdController,
} from "../controllers/collectionController";
import verifyToken from "../middlewares/auth";
const collectionRouter = express.Router();

collectionRouter.post("/create/:id", verifyToken, createCollectionController);
collectionRouter.delete("/delete/:id", deleteCollectionController);
collectionRouter.get("/get/:id", getCollectionController);
collectionRouter.get("/getAll", getAllCollectionController);
collectionRouter.get(
  "/get-user/:id",
  verifyToken,
  getCollectionByUserIdController
);

export default collectionRouter;

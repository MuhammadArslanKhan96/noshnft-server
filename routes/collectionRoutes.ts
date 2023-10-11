import express from "express";
import {
  createCollectionController,
  deleteCollectionController,
  getCollectionController,
  getAllCollectionController,
  getCollectionByUserIdController,
} from "../controllers/collectionController";
const collectionRouter = express.Router();

collectionRouter.post("/create/:id", createCollectionController);
collectionRouter.delete("/delete/:id", deleteCollectionController);
collectionRouter.get("/get/:id", getCollectionController);
collectionRouter.get("/getAll", getAllCollectionController);
collectionRouter.get("/get-user/:id", getCollectionByUserIdController);

export default collectionRouter;

import express from "express";
import {
  createCollectionController,
  deleteCollectionController,
  getCollectionController,
  getAllCollectionController,
} from "../controllers/collectionController";
const collectionRouter = express.Router();

collectionRouter.post("/create/:id", createCollectionController);
collectionRouter.delete("/delete/:id", deleteCollectionController);
collectionRouter.get("/get/:id", getCollectionController);
collectionRouter.get("/getAll", getAllCollectionController);

export default collectionRouter;

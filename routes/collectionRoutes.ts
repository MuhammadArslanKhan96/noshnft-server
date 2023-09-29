import express from "express";
import { collectionController } from "../controllers/collectionController";
const collectionRouter = express.Router();

collectionRouter.post("/create/:id", collectionController.createCollection);
collectionRouter.delete("/delete/:id", collectionController.deleteCollection);
collectionRouter.get("/get/:id", collectionController.getCollection);
collectionRouter.get("/getAll", collectionController.getAllCollections);

export default collectionRouter;

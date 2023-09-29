import express from "express";
import { nftCollectionController } from "../controllers/nftCollectionController";
const nftCollectionRouter = express.Router();

nftCollectionRouter.post(
  "/create",
  nftCollectionController.createNftCollection
);
nftCollectionRouter.delete(
  "/delete/:id",
  nftCollectionController.deleteNftCollection
);
nftCollectionRouter.get("/get/:id", nftCollectionController.getNftCollection);

export default nftCollectionRouter;

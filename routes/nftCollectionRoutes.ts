import express from "express";
import { getNftCollectionController } from "../controllers/nftCollectionController";
const nftCollectionRouter = express.Router();

nftCollectionRouter.get("/get/:id", getNftCollectionController);

export default nftCollectionRouter;

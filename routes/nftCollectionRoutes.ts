import express from "express";
import { getNftCollection } from "../models/nftCollection";
const nftCollectionRouter = express.Router();

nftCollectionRouter.get("/get/:id", getNftCollection);

export default nftCollectionRouter;

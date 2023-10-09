import express from "express";
import {
  buyNftController,
  createNftController,
  deleteNftController,
  forSaleNftController,
  getAllNftsController,
  getNftController,
  updateNftStatusController,
} from "../controllers/nftController";
import verifyToken from "../middlewares/auth";
const nftRouter = express.Router();

nftRouter.post("/create/:id", verifyToken, createNftController);
nftRouter.delete("/delete/:id", deleteNftController);
nftRouter.put("/update/:id", buyNftController);
nftRouter.get("/get/:id", getNftController);
nftRouter.get("/getsale/:id", forSaleNftController);
nftRouter.get("/getAll", getAllNftsController);
nftRouter.put("/update-nft/:id", updateNftStatusController);

export default nftRouter;

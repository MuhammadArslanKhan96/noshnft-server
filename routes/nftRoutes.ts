import express from "express";
import {
  buyNftController,
  checkLikedNftController,
  createNftController,
  deleteNftController,
  forSaleNftController,
  getAllNftsController,
  getAllNftsDetailController,
  getLikedNftController,
  getNftByIdController,
  getNftByPrimaryController,
  getNftController,
  likeNftController,
  unlikeNftController,
  updateNftStatusController,
} from "../controllers/nftController";
import verifyToken from "../middlewares/auth";
const nftRouter = express.Router();

nftRouter.post("/create/:id", verifyToken, createNftController);
nftRouter.delete("/delete/:id", deleteNftController);
nftRouter.put("/update/:id", verifyToken, buyNftController);
nftRouter.get("/get/:id", verifyToken, getNftController);
nftRouter.get("/getsale/:id", forSaleNftController);
nftRouter.get("/getAll", getAllNftsController);
nftRouter.put("/update-nft/:id", verifyToken, updateNftStatusController);
nftRouter.get("/get-nft/:id", getNftByIdController);
nftRouter.get("/get-nft-primary/:id", getNftByPrimaryController);
nftRouter.post("/like/", likeNftController);
nftRouter.delete("/unlike", unlikeNftController);
nftRouter.post("/check", checkLikedNftController);
nftRouter.get("/get-liked/:id", getLikedNftController);
nftRouter.get("/get-all-details/", getAllNftsDetailController);

export default nftRouter;

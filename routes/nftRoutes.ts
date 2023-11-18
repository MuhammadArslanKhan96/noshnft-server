import express from "express";
import * as controllers from "../controllers/nftController";
import verifyToken from "../middlewares/auth";
const nftRouter = express.Router();

nftRouter.post("/create/:id", controllers.createNft);
nftRouter.delete("/delete/:id", controllers.deleteNft);
nftRouter.put("/update/:id", verifyToken, controllers.buyNft);
nftRouter.get("/get/:id", controllers.getNft);
nftRouter.get("/getsale/:id", controllers.forSaleNft);
nftRouter.get("/getAll", controllers.getAllNfts);
nftRouter.put("/update-nft/:id", verifyToken, controllers.updateNftStatus);
nftRouter.get("/get-nft/:id", controllers.getNftById);
nftRouter.get("/get-nft-primary/:id", controllers.getNftByPrimary);
nftRouter.post("/like/", controllers.likeNft);
nftRouter.delete("/unlike", controllers.unlikeNft);
nftRouter.post("/check", controllers.checkLikedNft);
nftRouter.get("/get-liked/:id", controllers.getLikedNft);
nftRouter.get("/get-all-details/", controllers.getAllNftsDetail);
nftRouter.put("/update-price", controllers.updatePrice);

export default nftRouter;

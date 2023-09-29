import express from "express";
import { nftController } from "../controllers/nftController";
import verifyToken from "../middlewares/auth";
const nftRouter = express.Router();

nftRouter.post("/create/:id", verifyToken, nftController.createNft);
nftRouter.delete("/delete/:id", nftController.deleteNft);
nftRouter.put("/update/:id", nftController.buyNft);
nftRouter.get("/get/:id", nftController.getNft);
nftRouter.get("/getsale/:id", nftController.forSaleNfts);
nftRouter.get("/getAll", nftController.getAllNfts);

export default nftRouter;

import express from "express";
import {
  buyNftController,
  createNftController,
  deleteNftController,
  forSaleNftController,
  getAllNftsController,
  getNftController,
} from "../controllers/nftController";
import verifyToken from "../middlewares/auth";
const nftRouter = express.Router();

nftRouter.post("/create/:id", verifyToken, createNftController);
nftRouter.delete("/delete/:id", deleteNftController);
nftRouter.put("/update/:id", buyNftController);
nftRouter.get("/get/:id", getNftController);
nftRouter.get("/getsale/:id", forSaleNftController);
nftRouter.get("/getAll", getAllNftsController);

export default nftRouter;

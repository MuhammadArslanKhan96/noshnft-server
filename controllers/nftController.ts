import express from "express";
import {
  createNft,
  deleteNft,
  getNft,
  getAllNfts,
  buyNft,
  forSaleNfts,
} from "../models/nft";

export const nftController = {
  createNft: async (req: express.Request, res: express.Response) => {
    try {
      const result = await createNft(req.body);
      res.status(200).json({
        status: "Success",
        message: "NFT created successfully",
        result,
      });
    } catch (error) {
      res.status(400).json({ status: "Error", message: "Error occured" });
    }
  },
  deleteNft: async (req: express.Request, res: express.Response) => {
    try {
      await deleteNft(req, res);
    } catch (error) {
      throw error;
    }
  },
  buyNft: async (req: express.Request, res: express.Response) => {
    try {
      const result = await buyNft(req.body.id, req.params.id);
      res
        .status(200)
        .json({ status: "Success", message: "Nft bought", result });
    } catch (error) {
      res.status(400).send(error);
    }
  },

  getNft: async (req: express.Request, res: express.Response) => {
    try {
      const result = await getNft(req.params.id);
      res
        .status(200)
        .json({ status: "Success", message: "Nft fetched", result });
    } catch (error) {
      res.status(400).send(error);
    }
  },
  getAllNfts: async (req: express.Request, res: express.Response) => {
    try {
      await getAllNfts(req, res);
    } catch (error) {
      throw error;
    }
  },
  forSaleNfts: async (req: express.Request, res: express.Response) => {
    try {
      const result = await forSaleNfts(req.params.id);
      res
        .status(200)
        .json({ status: "Success", message: "Nft fetched", result });
    } catch (error) {
      res.status(401).send(error);
    }
  },
};

import express from "express";
import {
  createNftCollection,
  deleteNftCollection,
  getNftCollection,
} from "../models/nftCollection";
export const nftCollectionController = {
  createNftCollection: async (req: express.Request, res: express.Response) => {
    try {
      const result = await createNftCollection();
    } catch (error) {
      throw error;
    }
  },
  deleteNftCollection: async (req: express.Request, res: express.Response) => {
    try {
      const result = await deleteNftCollection();
    } catch (error) {
      throw error;
    }
  },
  getNftCollection: async (req: express.Request, res: express.Response) => {
    try {
      const result = await getNftCollection(req.params.id);
      res
        .status(200)
        .json({ status: "Success", message: "Nft fetched", result });
    } catch (error) {
      throw error;
    }
  },
};

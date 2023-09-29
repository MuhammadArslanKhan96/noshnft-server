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
      const result = await getNftCollection();
    } catch (error) {
      throw error;
    }
  },
};

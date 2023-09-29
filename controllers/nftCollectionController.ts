import express from "express";
import {
  createNftCollection,
  deleteNftCollection,
  getNftCollection,
} from "../models/nftCollection";
export const nftCollectionController = {
  createNftCollection: (req: express.Request, res: express.Response) => {
    try {
      createNftCollection();
    } catch (error) {
      throw error;
    }
  },
  deleteNftCollection: (req: express.Request, res: express.Response) => {
    try {
      deleteNftCollection();
    } catch (error) {
      throw error;
    }
  },
  getNftCollection: (req: express.Request, res: express.Response) => {
    try {
      getNftCollection();
    } catch (error) {
      throw error;
    }
  },
};

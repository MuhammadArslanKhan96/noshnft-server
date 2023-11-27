import express from "express";
import { getNftCollection } from "../models/nftCollection";

export const getNftCollectionController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await getNftCollection(req.params.id);
    res.status(200).json({ status: "Success", message: "Nft fetched", result });
  } catch (error) {
    throw error;
  }
};

import express from "express";
import { pool } from "../db";
import { nftQueries, nftCollectionQueries } from "../helpers/queries";
interface nft {
  name: string;
  nftUrl: string;
  description: string;
  royalties: string;
  size: string;
  properties: string;
  price: string;
  onSale: boolean;
  primaryOwner: string;
  currentOwner: string;
  collectionId: number;
}

const createNft = async (Nft: nft) => {
  try {
    const {
      name,
      nftUrl,
      description,
      royalties,
      size,
      properties,
      price,
      onSale,
      primaryOwner,
      currentOwner,
      collectionId,
    } = Nft;
    const result = await pool.query(nftQueries.createNft, [
      name,
      nftUrl,
      description,
      royalties,
      size,
      properties,
      price,
      onSale,
      primaryOwner,
      currentOwner,
    ]);
    const nftId = result.rows[0].id;
    console.log(nftId);
    console.log(collectionId);
    await pool.query(nftCollectionQueries.createNftCollection, [
      collectionId,
      nftId,
    ]);
  } catch (error) {
    throw error;
  }
};
const deleteNft = async (req: express.Request, res: express.Response) => {
  try {
  } catch (error) {
    throw error;
  }
};
const buyNft = async (nftId: number, id: string) => {
  try {
    const result = await pool.query(nftQueries.buyNft, [id, nftId]);
    return result;
  } catch (error) {
    throw error;
  }
};
const getNft = async (id: string) => {
  try {
    const result = await pool.query(nftQueries.getNft, [id]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};
const getAllNfts = async () => {
  try {
    const result = await pool.query(nftQueries.getAllNfts);
    return result.rows;
  } catch (error) {
    throw error;
  }
};
const forSaleNfts = async (id: string) => {
  try {
    const result = await pool.query(nftQueries.forSaleNft, [id]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

export { createNft, deleteNft, getNft, getAllNfts, buyNft, forSaleNfts };

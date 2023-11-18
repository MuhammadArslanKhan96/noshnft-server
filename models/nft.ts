import express from "express";
import { pool } from "../db";
import { nftQueries, nftCollectionQueries } from "../helpers/queries";
interface nft {
  name: string;
  nftUrl: string;
  imageName: string;
  imageUrl: string;
  description: string;
  royalties: string;
  size: string;
  properties: string;
  price: string;
  onSale: boolean;
  primaryOwner: string;
  currentOwner: string;
  ownerWallet: string;
  collectionId: number;
}

export const createNft = async (Nft: nft) => {
  try {
    const {
      name,
      nftUrl,
      imageName,
      imageUrl,
      description,
      royalties,
      size,
      properties,
      price,
      onSale,
      primaryOwner,
      currentOwner,
      ownerWallet,
      collectionId,
    } = Nft;

    const result = await pool.query(nftQueries.createNft, [
      name,
      nftUrl,
      imageName,
      imageUrl,
      description,
      royalties,
      size,
      properties,
      price,
      onSale,
      primaryOwner,
      currentOwner,
      ownerWallet,
    ]);
    const nftId = result.rows[0].id;
    await pool.query(nftCollectionQueries.createNftCollection, [
      collectionId,
      nftId,
    ]);
  } catch (error) {
    throw error;
  }
};
export const deleteNft = async (
  req: express.Request,
  res: express.Response
) => {
  try {
  } catch (error) {
    throw error;
  }
};
export const buyNft = async (nftId: number, status: boolean, id: string) => {
  try {
    const result = await pool.query(nftQueries.buyNft, [id, status, nftId]);
    return result;
  } catch (error) {
    throw error;
  }
};
export const getNft = async (id: string) => {
  try {
    const result = await pool.query(nftQueries.getNft, [id]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};
export const getAllNfts = async () => {
  try {
    const result = await pool.query(nftQueries.getAllNfts);
    return result.rows;
  } catch (error) {
    throw error;
  }
};
export const forSaleNfts = async (id: string) => {
  try {
    const result = await pool.query(nftQueries.forSaleNft, [id]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

export const updateNftStatus = async (nftId: string, status: boolean) => {
  try {
    const result = await pool.query(nftQueries.updateNftStatus, [
      status,
      nftId,
    ]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

export const getNftById = async (nftId: string) => {
  try {
    const result = await pool.query(nftQueries.getNftById, [nftId]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

export const getNftByPrimary = async (id: string) => {
  try {
    const result = await pool.query(nftQueries.getNftByPrimary, [id]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

export const likeNft = async (nftId: number, userId: string) => {
  try {
    const result = await pool.query(nftQueries.likeNft, [userId, nftId]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

export const unlikeNft = async (nftId: number, userId: string) => {
  try {
    const result = await pool.query(nftQueries.unlikeNft, [userId, nftId]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

export const checkLikedNft = async (nftId: number, userId: string) => {
  try {
    const result = await pool.query(
      "SELECT EXISTS(SELECT 1 FROM likes WHERE user_id = $1 AND nft_id = $2)",
      [userId, nftId]
    );

    const isLiked = result.rows[0].exists;
    return isLiked;
  } catch (error) {
    console.error(error);
  }
};

export const getLikedNft = async (userId: string) => {
  try {
    const result = await pool.query(nftQueries.getLikedNft, [userId]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

export const getAllNftsDetails = async () => {
  try {
    const result = await pool.query(nftQueries.getAllNftsDetails);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

export const updatePrice = async (price: string, nftId: string) => {
  try {
    const result = await pool.query(nftQueries.updatePrice, [price, nftId]);
  } catch (error) {
    throw error;
  }
};

import express from "express";
import {
  createNft,
  deleteNft,
  getNft,
  getAllNfts,
  buyNft,
  forSaleNfts,
  updateNftStatus,
  getNftById,
  getNftByPrimary,
  likeNft,
  unlikeNft,
  checkLikedNft,
  getLikedNft,
} from "../models/nft";

export const createNftController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await createNft(req.body);
    res.status(200).json({
      status: "Success",
      message: "NFT created successfully",
      result,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteNftController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    await deleteNft(req, res);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const buyNftController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await buyNft(req.body.id, req.body.status, req.params.id);
    res.status(200).json({ status: "Success", message: "Nft bought", result });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getNftController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await getNft(req.params.id);
    res.status(200).json({ status: "Success", message: "Nft fetched", result });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAllNftsController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await getAllNfts();
    res
      .status(200)
      .json({ status: "Success", message: "Nfts fetched", result });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const forSaleNftController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await forSaleNfts(req.params.id);
    res.status(200).json({ status: "Success", message: "Nft fetched", result });
  } catch (error) {
    res.status(401).send(error);
  }
};

export const updateNftStatusController = async (
  req: express.Request,
  res: express.Response
) => {
  const result = await updateNftStatus(req.params.id, req.body.status);
  res.status(200).json({ status: "Success", message: "Nft Updated", result });
  try {
  } catch (error) {
    res.status(401).send(error);
  }
};

export const getNftByIdController = async (
  req: express.Request,
  res: express.Response
) => {
  const result = await getNftById(req.params.id);
  res
    .status(200)
    .json({ status: "Success", message: "Nft Fetched by Id", result });
  try {
  } catch (error) {
    res.status(401).send(error);
  }
};

export const getNftByPrimaryController = async (
  req: express.Request,
  res: express.Response
) => {
  const result = await getNftByPrimary(req.params.id);
  res
    .status(200)
    .json({ status: "Success", message: "Nft Fetched by Id", result });
  try {
  } catch (error) {
    res.status(401).send(error);
  }
};

export const likeNftController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await likeNft(req.body.nftId, req.body.userId);
    res.status(200).json({ status: "Success", message: "Nft liked", result });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const unlikeNftController = async (
  req: express.Request,
  res: express.Response
) => {
  const result = await unlikeNft(req.body.nftId, req.body.userId);
  res.status(200).json({ status: "Success", message: "Nft unliked", result });
  try {
  } catch (error) {
    res.status(401).send(error);
  }
};

export const checkLikedNftController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await checkLikedNft(req.body.nftId, req.body.userId);
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getLikedNftController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await getLikedNft(req.params.id);
    res.status(200).json({ status: "Success", message: "Nft fetched", result });
  } catch (error) {
    res.status(500).send(error);
  }
};

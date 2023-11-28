import express from "express";
import * as model from "../models/nft";

export const createNft = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await model.createNft(req.body);
    res.status(200).json({
      status: "Success",
      message: "NFT created successfully",
      result,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

// export const deleteNft = async (
//   req: express.Request,
//   res: express.Response
// ) => {
//   try {
//     await model.deleteNft(req, res);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

export const buyNft = async (req: express.Request, res: express.Response) => {
  try {
    const result = await model.buyNft(
      req.params.id,
      req.body.owner_wallet,
      req.body.status,
      req.body.id
    );
    res.status(200).json({ status: "Success", message: "Nft bought", result });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getNft = async (req: express.Request, res: express.Response) => {
  try {
    const result = await model.getNft(req.params.id);
    res.status(200).json({ status: "Success", message: "Nft fetched", result });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllNfts = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await model.getAllNfts();
    res
      .status(200)
      .json({ status: "Success", message: "Nfts fetched", result });
  } catch (error) {
    res.status(500).send(error);
  }
};

// export const forSaleNft = async (
//   req: express.Request,
//   res: express.Response
// ) => {
//   try {
//     const result = await model.forSaleNfts(req.params.id);
//     res.status(200).json({ status: "Success", message: "Nft fetched", result });
//   } catch (error) {
//     res.status(401).send(error);
//   }
// };

export const updateNftStatus = async (
  req: express.Request,
  res: express.Response
) => {
  const result = await model.updateNftStatus(req.params.id, req.body.status);
  res.status(200).json({ status: "Success", message: "Nft Updated", result });
  try {
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getNftById = async (
  req: express.Request,
  res: express.Response
) => {
  const result = await model.getNftById(req.params.id);
  res
    .status(200)
    .json({ status: "Success", message: "Nft Fetched by Id", result });
  try {
  } catch (error) {
    res.status(401).send(error);
  }
};

export const getNftByPrimary = async (
  req: express.Request,
  res: express.Response
) => {
  const result = await model.getNftByPrimary(req.params.id);
  res
    .status(200)
    .json({ status: "Success", message: "Nft Fetched by Id", result });
  try {
  } catch (error) {
    res.status(401).send(error);
  }
};

export const likeNft = async (req: express.Request, res: express.Response) => {
  try {
    const result = await model.likeNft(req.body.nftId, req.body.userId);
    res.status(200).json({ status: "Success", message: "Nft liked", result });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const unlikeNft = async (
  req: express.Request,
  res: express.Response
) => {
  const result = await model.unlikeNft(req.body.nftId, req.body.userId);
  res.status(200).json({ status: "Success", message: "Nft unliked", result });
  try {
  } catch (error) {
    res.status(401).send(error);
  }
};

export const checkLikedNft = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await model.checkLikedNft(req.body.nftId, req.body.userId);
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getLikedNft = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await model.getLikedNft(req.params.id);
    res.status(200).json({ status: "Success", message: "Nft fetched", result });
  } catch (error) {
    res.status(500).send(error);
  }
};
export const getAllNftsDetail = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await model.getAllNftsDetails();
    res.status(200).json({ status: "Success", message: "Nft fetched", result });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updatePrice = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await model.updatePrice(req.body.price, req.body.id);
    res
      .status(200)
      .json({ status: "Success", message: "Price updated", result });
  } catch (error) {
    res.status(500).send(error);
  }
};

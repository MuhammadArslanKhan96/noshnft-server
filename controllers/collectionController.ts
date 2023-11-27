import express from "express";
import * as models from "../models/collection";

export const createCollection = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = models.createCollection(req.body);
    res
      .status(200)
      .json({ status: "Success", message: "Collection created", result });
  } catch (error) {
    res.status(400).send(error);
  }
};

// export const deleteCollection = async (
//   req: express.Request,
//   res: express.Response
// ) => {
//   try {
//     models.deleteCollection();
//   } catch (error) {
//     throw error;
//   }
// };

export const getCollection = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const result = await models.getCollection(id);
    res.status(200).json({
      status: "Success",
      message: "Fetched all collections",
      result,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAllCollection = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await models.getAllCollections();
    res.status(200).json({
      status: "Success",
      message: "Fetched all collections",
      result,
    });
  } catch (error) {
    throw error;
  }
};

export const getCollectionByUserId = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = await models.getCollectionByUserId(req.params.id);
    res.status(200).json({
      status: "Success",
      message: "Fetched all collections",
      result,
    });
  } catch (error) {
    throw error;
  }
};

import express from "express";
import {
  createCollection,
  deleteCollection,
  getCollection,
  getAllCollections,
} from "../models/collection";

export const createCollectionController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const result = createCollection(req.body);
    res
      .status(200)
      .json({ status: "Success", message: "Collection created", result });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteCollectionController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    deleteCollection();
  } catch (error) {
    throw error;
  }
};

export const getCollectionController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const result = await getCollection(id);
    res.status(200).json({
      status: "Success",
      message: "Fetched all collections",
      result,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAllCollectionController = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    getAllCollections();
  } catch (error) {
    throw error;
  }
};

// export const collectionController = {
//   createCollection: (req: express.Request, res: express.Response) => {
//     try {
//       const result = createCollection(req.body);
//       res
//         .status(200)
//         .json({ status: "Success", message: "Collection created", result });
//     } catch (error) {
//       res.status(400).send(error);
//     }
//   },
//   deleteCollection: (req: express.Request, res: express.Response) => {
//     try {
//       deleteCollection();
//     } catch (error) {
//       throw error;
//     }
//   },
//   getCollection: async (req: express.Request, res: express.Response) => {
//     try {
//       const { id } = req.params;
//       const result = await getCollection(id);
//       res.status(200).json({
//         status: "Success",
//         message: "Fetched all collections",
//         result,
//       });
//     } catch (error) {
//       res.status(400).send(error);
//     }
//   },
//   getAllCollections: (req: express.Request, res: express.Response) => {
//     try {
//       getAllCollections();
//     } catch (error) {
//       throw error;
//     }
//   },
// };

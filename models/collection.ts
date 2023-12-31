import { pool } from "../db";
import { collectionQueries } from "../helpers/queries";
import collection from "../types/collection";

const createCollection = async (Collection: collection) => {
  try {
    const { name, description, primaryOwner, symbol, address } = Collection;
    const result = await pool.query(collectionQueries.createCollection, [
      name,
      description,
      primaryOwner,
      symbol,
      address,
    ]);
    return result;
  } catch (error) {
    throw error;
  }
};

const getCollection = async (id: string) => {
  try {
    const result = await pool.query(collectionQueries.getCollectionById, [id]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const getAllCollections = async () => {
  const result = await pool.query(collectionQueries.getAllcollection);
  return result.rows;
};

const getCollectionByUserId = async (id: string) => {
  try {
    const result = await pool.query(collectionQueries.getCollectionByUserId, [
      id,
    ]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

export {
  createCollection,
  getCollection,
  getAllCollections,
  getCollectionByUserId,
};

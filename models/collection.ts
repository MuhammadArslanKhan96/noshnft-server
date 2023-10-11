import { pool } from "../db";
import { collectionQueries } from "../helpers/queries";
interface collection {
  name: string;
  description: string;
  primaryOwner: string;
}
const createCollection = async (Collection: collection) => {
  try {
    const { name, description, primaryOwner } = Collection;
    const result = await pool.query(collectionQueries.createCollection, [
      name,
      description,
      primaryOwner,
    ]);
    return result;
  } catch (error) {
    throw error;
  }
};
const deleteCollection = async () => {
  try {
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
  deleteCollection,
  getCollection,
  getAllCollections,
  getCollectionByUserId,
};

import { pool } from "../db";
import { nftCollectionQueries } from "../helpers/queries";

const createNftCollection = async () => {
  try {
  } catch (error) {
    throw error;
  }
};
const deleteNftCollection = async () => {
  try {
  } catch (error) {
    throw error;
  }
};
const getNftCollection = async (id: string) => {
  try {
    const result = await pool.query(nftCollectionQueries.getNftCollection, [
      id,
    ]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

export { createNftCollection, deleteNftCollection, getNftCollection };

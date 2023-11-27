import { pool } from "../db";
import { nftCollectionQueries } from "../helpers/queries";

export const getNftCollection = async (id: string) => {
  try {
    const result = await pool.query(nftCollectionQueries.getNftCollection, [
      id,
    ]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

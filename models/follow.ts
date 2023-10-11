import { pool } from "../db";

interface follow {
  followerId: string;
  followingId: string;
}

const createFollow = async (Follow: follow) => {
  try {
    const { followerId, followingId } = Follow;
    const result = await pool.query(
      `INSERT INTO follows (follower_id, following_id) VALUES ($1, $2) RETURNING *`,
      [followerId, followingId]
    );
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const deleteFollow = async (Follow: follow) => {
  try {
    const { followerId, followingId } = Follow;
    const result = await pool.query(
      `DELETE FROM follows WHERE follower_id = $1 AND following_id = $2 RETURNING *`,
      [followerId, followingId]
    );
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const getFollowers = async (id: string) => {
  try {
    const result = await pool.query(
      `SELECT users.* FROM users
      JOIN follows ON users.id = follows.follower_id
      WHERE follows.following_id = $1;`,
      [id]
    );
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const getFollowing = async (id: string) => {
  try {
    const result = await pool.query(
      `SELECT users.* FROM users
      JOIN follows ON users.id = follows.following_id
      WHERE follows.follower_id = $1;`,
      [id]
    );
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const checkFollowing = async (Follow: follow) => {
  try {
    const { followerId, followingId } = Follow;
    const result = await pool.query(
      `SELECT EXISTS ( SELECT 1 FROM follows WHERE follower_id = $1 AND following_id = $2)`,
      [followerId, followingId]
    );
    const isFollowing = result.rows[0].exists;
    return isFollowing;
  } catch (error) {
    throw error;
  }
};

export {
  createFollow,
  deleteFollow,
  getFollowers,
  getFollowing,
  checkFollowing,
};

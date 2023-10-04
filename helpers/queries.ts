export const userQueries = {
  createUser: "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
  deleteUser: "DELETE FROM users WHERE id = $1",
  getUser: "SELECT * FROM users WHERE email = $1",
  getAllUser: "SELECT * FROM users",
  getUserById: "SELECT * FROM users WHERE id = $1",
  updatePassword: "UPDATE users SET password = $1 WHERE email = $2",
};

export const nftQueries = {
  createNft:
    "INSERT INTO nfts (name, nft_url, image_name, image_url, description, royalties, size, properties, price, on_sale, primary_owner, current_owner) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id",
  deleteNft: "DELETE FROM nfts WHERE id = $1",
  buyNft: "UPDATE nfts SET current_owner = $1 WHERE id = $2",
  getNft: "SELECT * FROM nfts WHERE current_owner = $1",
  forSaleNft: "SELECT * FROM nfts where current_owner != $1",
  getAllNfts: "SELECT * FROM nfts",
};

export const collectionQueries = {
  createCollection:
    "INSERT INTO collection (name, description, primary_owner) VALUES ($1, $2, $3)",
  deleteCollection: "DELETE FROM collection WHERE id = $1",
  getCollection: "SELECT * FROM collection WHERE primary_owner = $1",
  getAllcollection: "SELECT * FROM collection",
};

export const nftCollectionQueries = {
  createNftCollection:
    "INSERT INTO nft_collection (collection_id, nft_id) VALUES ($1, $2)",
  getNftCollection: "SELECT * FROM nftcollection WHERE collectionId = $1",
  deleteNftCollection: "DELETE FROM collection WHERE id = $1",
};

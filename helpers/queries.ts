export const userQueries = {
  createUser: "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
  deleteUser: "DELETE FROM users WHERE id = $1",
  getUser: "SELECT * FROM users WHERE email = $1",
  getAllUser: "SELECT * FROM users",
  getUserById: "SELECT * FROM users WHERE id = $1",
  updatePassword: "UPDATE users SET password = $1 WHERE email = $2",
  updateUser:
    "UPDATE users SET name = $1, email = $2, bio = $3, website = $4, facebook = $5, twitter = $6, telegram = $7, image_name = $8, image_url = $9 WHERE id = $10",
};

export const nftQueries = {
  createNft:
    "INSERT INTO nfts (name, nft_url, image_name, image_url, description, royalties, size, properties, price, on_sale, primary_owner, current_owner) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id",
  deleteNft: "DELETE FROM nfts WHERE id = $1",
  buyNft: "UPDATE nfts SET current_owner = $1, on_sale = $2 WHERE id = $3",
  getNft: "SELECT * FROM nfts WHERE current_owner = $1",
  getNftById:
    "SELECT nfts.*, nfts.name AS nft_name, nfts.description as nft_description, users.name AS creator_name, users.image_url as user_image, collection.* FROM nfts LEFT JOIN users ON nfts.primary_owner = users.id LEFT JOIN nft_collection ON nfts.id = nft_collection.nft_id LEFT JOIN collection ON nft_collection.collection_id = collection.id WHERE nfts.id = $1",
  forSaleNft: "SELECT * FROM nfts where current_owner != $1",
  getAllNfts: "SELECT * FROM nfts",
  updateNftStatus: "UPDATE nfts SET on_sale = $1 WHERE id = $2",
  getNftByPrimary: "SELECT * FROM nfts WHERE primary_owner = $1",
  likeNft: "INSERT INTO likes (user_id, nft_id) VALUES ($1, $2)",
  unlikeNft: "DELETE FROM likes WHERE user_id = $1 AND nft_id = $2",
  getLikedNft:
    "SELECT nfts.* FROM nfts JOIN likes ON nfts.id = likes.nft_id WHERE likes.user_id = $1",
};

export const collectionQueries = {
  createCollection:
    "INSERT INTO collection (name, description, primary_owner) VALUES ($1, $2, $3)",
  deleteCollection: "DELETE FROM collection WHERE id = $1",
  getCollectionById:
    "SELECT collection.id AS collection_id, collection.name AS collection_name, collection.description AS collection_description, users.id AS user_id,users.name AS user_name,users.email AS user_email,users.image_url AS user_image_url,json_agg(json_build_object('nft_name', nfts.name,'nft_description', nfts.description,'nft_price', nfts.price,'nft_image_url', nfts.image_url)) AS nfts FROM collection JOIN users ON collection.primary_owner = users.id JOIN nfts ON nfts.primary_owner = users.id WHERE users.id = $1 GROUP BY collection.id, users.id",
  getCollectionByUserId: "SELECT * FROM collection WHERE primary_owner = $1",
  getAllcollection:
    "SELECT collection.id AS collection_id, collection.name AS collection_name, collection.description AS collection_description, users.id AS user_id,users.name AS user_name,users.email AS user_email,users.image_url AS user_image_url,json_agg(json_build_object('nft_name', nfts.name,'nft_description', nfts.description,'nft_price', nfts.price,'nft_image_url', nfts.image_url)) AS nfts FROM collection JOIN users ON collection.primary_owner = users.id JOIN nfts ON nfts.primary_owner = users.id GROUP BY collection.id, users.id",
};

export const nftCollectionQueries = {
  createNftCollection:
    "INSERT INTO nft_collection (collection_id, nft_id) VALUES ($1, $2)",
  getNftCollection:
    "SELECT nft_collection.*, nfts.* FROM nft_collection JOIN nfts ON nft_collection.nft_id = nfts.id WHERE collection_id = $1",
  deleteNftCollection: "DELETE FROM collection WHERE id = $1",
};

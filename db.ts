import { Pool } from "pg";
const pool = new Pool({
  user: "noshadmin",
  host: "noshnft.cluster-ccvzxdv9lmvo.us-east-1.rds.amazonaws.com",
  database: "noshnftdb",
  password: "fSNT9z6zkA9coy",
  port: 5432,
});

const createTable = async (tableName: string, columns: string) => {
  const result = await pool.query(
    `
        SELECT EXISTS (
            SELECT FROM information_schema.tables
            WHERE table_name = $1
        )
    `,
    [tableName]
  );
  const tableExists = result.rows[0].exists;
  if (!tableExists) {
    await pool.query(`CREATE TABLE ${tableName} (${columns})`);
  }
};

createTable(
  "users",
  "id SERIAL PRIMARY KEY , name TEXT NOT NULL, email TEXT NOT NULL UNIQUE, password TEXT NOT NULL"
);

createTable(
  "follows",
  "id SERIAL PRIMARY KEY, follower_id INTEGER REFERENCES users(id), following_id INTEGER REFERENCES users(id), UNIQUE(follower_id, following_id)"
);

createTable(
  "collection",
  "id SERIAL PRIMARY KEY, name TEXT, description TEXT, primary_owner INTEGER REFERENCES users(id)"
);

createTable(
  "nfts",
  "id SERIAL PRIMARY KEY, name TEXT, nft_url TEXT, image_name TEXT, image_url TEXT, description TEXT, royalties TEXT, size TEXT, properties TEXT, price TEXT, on_sale BOOLEAN, primary_owner INTEGER REFERENCES users(id), current_owner INTEGER REFERENCES users(id)"
);

createTable(
  "nft_collection",
  "collection_id INTEGER REFERENCES collection(id), nft_id INTEGER REFERENCES nfts(id), PRIMARY KEY (collection_id, nft_id)"
);

export { pool };

import express from "express";
import cors from "cors";
import userRouter from "./routes/userRoutes";
import nftRouter from "./routes/nftRoutes";
import collectionRouter from "./routes/collectionRoutes";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import multer from "multer";
import crypto from "crypto";
import { pool } from "./db";
const app = express();
const PORT = 8080;

const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const accessKeyId = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

app.use(cors());
app.use(express.json());

const s3 = new S3Client({
  credentials: {
    accessKeyId: accessKeyId as string,
    secretAccessKey: secretAccessKey as string,
  },
  region: bucketRegion,
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const randomImageName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

app.post(
  "/create/image",
  upload.single("file-upload"),
  async (req: express.Request, res: express.Response) => {
    console.log("req.body", req.body);
    console.log("req.file", req.file);
    console.log("req.file.buffer", req.file?.buffer);
    req.file?.buffer;
    const params = {
      Bucket: bucketName,
      Key: randomImageName(),
      Body: req.file?.buffer,
      ContentType: req.file?.mimetype,
    };
    const command = new PutObjectCommand(params);
    await s3.send(command);
    const imageName = randomImageName();
    const imageUrl = `https://${bucketName}.s3.amazonaws.com/${imageName}`;
    await pool.query(
      "INSERT INTO nfts (image_name, image_url) VALUES ($1, $2)",
      [imageName, imageUrl]
    );
    res.send({});
  }
);

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json({ message: "hello" });
});

app.use("/user", userRouter);
app.use("/nfts", nftRouter);
app.use("/collection", collectionRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

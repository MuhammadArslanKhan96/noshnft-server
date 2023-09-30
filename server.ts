import express from "express";
import cors from "cors";
import userRouter from "./routes/userRoutes";
import nftRouter from "./routes/nftRoutes";
import collectionRouter from "./routes/collectionRoutes";
const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json({ message: "hello" });
});
app.use("/user", userRouter);
app.use("/nfts", nftRouter);
app.use("/collection", collectionRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

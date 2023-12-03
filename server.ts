import express from "express";
import cors from "cors";
import userRouter from "./routes/userRoutes";
import nftRouter from "./routes/nftRoutes";
import collectionRouter from "./routes/collectionRoutes";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import multer from "multer";
import crypto from "crypto";
import nftCollectionRouter from "./routes/nftCollectionRoutes";
import followRouter from "./routes/followRoutes";
import { pdfToPng } from "pdf-to-png-converter";
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

// app.post("/create/pdf", async (req: express.Request, res: express.Response) => {
//   try {
//     let i: number;
//     var outputImages1 = convert(
//       "https://noshnft.s3.amazonaws.com/5d3aff9f5a8bf5c962ac1c18df96a7302fffdd7de073afd3a472152087f8dcea"
//     );
//     console.log(outputImages1);
//     outputImages1.then(function (outputImages) {
//       for (i = 0; i < outputImages.length; i++)
//         fs.writeFile("output" + i + ".png", outputImages[i], function (error) {
//           if (error) {
//             console.error("Error: " + error);
//           }
//         });
//     });
//   } catch (error) {
//     res.status(500).json({ message: error });
//   }
// });

app.post(
  "/create/image",
  upload.single("file-upload"),
  async (req: express.Request, res: express.Response) => {
    try {
      if (!req.file?.buffer) {
        return res.status(500).json({ message: "No file uploaded" });
      }
      console.log(req.file);

      if (req.file.mimetype == "application/pdf") {
        const convertPdfToImg = async (buffer: any) => {
          const pngPage = await pdfToPng(buffer, {
            pagesToProcess: [1],
            enableXfa: true,
          });
          console.log(pngPage[0]);
          return pngPage[0].content;
        };

        const pngBufferTwo = await convertPdfToImg(req.file?.buffer);
        console.log(pngBufferTwo);
        const imageName = randomImageName();

        const params = {
          Bucket: bucketName,
          Key: imageName,
          Body: pngBufferTwo,
          ContentType: req.file?.mimetype,
        };
        const command = new PutObjectCommand(params);
        await s3.send(command);
        const imageUrl = `https://${bucketName}.s3.amazonaws.com/${imageName}`;
        res.status(200).json({
          imageUrl,
          imageName,
          message: "PDF converted to Image and saved in S3",
        });
      }
      if (req.file.mimetype.startsWith("image/")) {
        const imageName = randomImageName();
        const params = {
          Bucket: bucketName,
          Key: imageName,
          Body: req.file?.buffer,
          ContentType: req.file?.mimetype,
        };
        const command = new PutObjectCommand(params);
        await s3.send(command);
        const imageUrl = `https://${bucketName}.s3.amazonaws.com/${imageName}`;
        res.status(200).json({ imageUrl, imageName });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
);

// app.post(
//   "/create/image",
//   upload.single("file-upload"),
//   async (req: express.Request, res: express.Response) => {
//     try {
// console.log(req.file?.buffer);
//       if (!req.file?.buffer)
//         return res.status(500).json({ message: "No file uploaded" });
//       const convert = convertPdfToPng(req.file?.buffer, options);
//       const pageOutputBuffer = await convert(1, { responseType: "buffer" });
//       const pngBuffer = pageOutputBuffer.buffer;
//       console.log(pngBuffer?.toString("base64"));
//       console.log(pageOutputBuffer);

//       res.status(200).json({ message: pageOutputBuffer });
//     } catch (error) {
//       res.status(500).json({ message: error });
//     }

//     const imageName = randomImageName();
//     const params = {
//       Bucket: bucketName,
//       Key: imageName,
//       Body: req.file?.buffer,
//       ContentType: req.file?.mimetype,
//     };
//     const command = new PutObjectCommand(params);
//     await s3.send(command);
//     const imageUrl = `https://${bucketName}.s3.amazonaws.com/${imageName}`;
//     res.status(200).json({ imageUrl, imageName });
//   }
// );

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json({ message: "hello" });
});

app.use("/user", userRouter);
app.use("/nfts", nftRouter);
app.use("/collection", collectionRouter);
app.use("/nftcollection", nftCollectionRouter);
app.use("/follow", followRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

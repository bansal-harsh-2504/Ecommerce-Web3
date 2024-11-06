import express from "express";
import cors from "cors";
import "dotenv/config";
import connectToDB from "./config/mongodb.js";
import connectToCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";

//App config
const app = express();
const port = process.env.PORT || 4000;
connectToDB();
connectToCloudinary();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//API endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on PORT : ${port}`);
});

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import testController from "./controllers/testController.js";
import productRouter from "./routes/productsRoutes.js";

// configurations
const PORT = process.env.PORT || 4000;
const mongo_uri = process.env.MONGO_URI;

const app = express();

app.use(express.json());
app.get("/", testController);
app.use(productRouter);

const startApp = async (port, uri) => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(uri);
    console.log("Database connection Established !");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startApp(PORT, mongo_uri);

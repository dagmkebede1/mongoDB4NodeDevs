import express from "express";
import {
  createProduct,
  deleteProduct,
  findAllProducts,
  singleProduct,
  updateProducts,
} from "../controllers/productsController.js";

const Router = express.Router();

//REST api
Router.route("/products").post(createProduct).get(findAllProducts);
Router.route("/products/:id")
  .get(singleProduct)
  .patch(updateProducts)
  .delete(deleteProduct);

export default Router;

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please provide the title !"],
      unique: [true, "please provide a unique title !"],
    },
    desc: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

const products = mongoose.model("Product", productSchema);

export default products;

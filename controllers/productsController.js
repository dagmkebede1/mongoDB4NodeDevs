import product from "../model/products.js";

const createProduct = async (req, res) => {
  try {
    const savedProducts = await product.create(req.body);

    res.status(201).json({
      status: "success",
      savedProducts,
    });
  } catch (error) {
    console.log(error);
  }
};

const findAllProducts = async (req, res) => {
  try {
    let products = await product.find();

    res.status(200).json({
      status: "success",
      total: products.length,
      data: products,
    });
  } catch (error) {
    console.log(error);
  }
};

const singleProduct = async (req, res) => {
  //   console.log(req.query);

  let id = req.params.id;

  try {
    let singleDoc = await product.findById({ _id: id });

    res.status(200).json({
      status: "success",
      data: singleDoc,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProducts = async (req, res) => {
  let id = req.params.id;
  try {
    const updatedProduct = await product.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );

    res.status(200).json({
      status: "success",
      updatedProduct,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  let id = req.params.id;
  try {
    await product.findByIdAndDelete({ _id: id });

    res.status(200).json({
      status: "success",
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  createProduct,
  findAllProducts,
  singleProduct,
  updateProducts,
  deleteProduct,
};

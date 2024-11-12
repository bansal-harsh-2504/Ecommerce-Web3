import { v2 as cloudinary } from "cloudinary";
import Product from "../models/product.model.js";
import mongoose from "mongoose";

//Route for adding a product
export const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let res = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return res.secure_url;
      })
    );

    const productData = {
      name,
      description,
      category,
      subCategory,
      price: Number(price),
      bestseller: bestseller === "true" ? "true" : "false",
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };

    const product = new Product(productData);
    await product.save();

    res.json({
      success: true,
      message: "Product created Successfully",
    });

    /*
    console.log(
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller
    );
    
    console.log(image1, image2, image3, image4);
    */
  } catch (error) {
    console.log("Error in Adding Product Conltroller : ", error.message);
    res.json({ success: false, message: "Internal Server Error" });
  }
};

//Route for listing all products
export const listProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({
      success: true,
      message: "All products fetched successfully",
      products,
    });
  } catch (error) {
    console.log("Error in Listing Product Conltroller : ", error.message);
    res.json({ success: false, message: "Internal Server Error" });
  }
};

//Route for removing a product
export const removeProduct = async (req, res) => {
  try {
    const { productId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.json({
        success: false,
        message: "Invalid product ID",
      });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.json({
        success: false,
        message: "Product not found",
      });
    }

    await Product.findByIdAndDelete(productId);
    res.json({
      success: true,
      message: "Product removed successfully",
    });
  } catch (error) {
    console.log("Error in Removing Product Conltroller : ", error.message);
    res.json({ success: false, message: "Internal Server Error" });
  }
};

//Route for single product info
export const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await Product.findById(productId);
    res.json({
      success: true,
      message: "Product info fetched successfully",
      product,
    });
  } catch (error) {
    console.log(
      "Error in Fetching single product Conltroller : ",
      error.message
    );
    res.json({ success: false, message: "Internal Server Error" });
  }
};

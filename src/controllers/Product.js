const Product = require("../models/product");
const catchAsync = require("../utils/catchAsync");

const getAllProducts = catchAsync(async (req, res) => {
    const products = await Product.find();
    
    res.status(200).json({
        status: "ok",
        data: products,
    });
});

const addProduct = catchAsync(async (req, res) => {
    let newProduct = new Product();
    newProduct.name = req.body.name;
    newProduct.quantity = req.body.quantity;
    newProduct.Price = req.body.Price;
    newProduct = await newProduct.save();
    res.status(200).json({
        status: "ok",
        dataInserted: newProduct,
    });
});

module.exports = {
    getAllProducts,
    addProduct,
}
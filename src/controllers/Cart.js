const Cart = require("../models/ShopingCart");
const catchAsync = require("../utils/catchAsync");

// const getAllProducts = catchAsync(async (req, res) => {
//     const products = await Cart.find();
    
//     res.status(200).json({
//         status: "ok",
//         data: products,
//     });
// });

const addCart = catchAsync(async (req, res) => {
    let newCart = new Cart();
    newCart.invoiceNumber = req.body.invoiceNumber;
    newCart.status = "PENDING";
    newCart.totalAmount = req.body.product.map(s => s.price).reduce((p,c)=>p+c,0);
    newCart.user = req.body.user;
    newCart.product = req.body.product;
    newCart = await newCart.save();
    res.status(200).json({
        status: "ok",
        dataInserted: newCart,
    });
});

module.exports = {
   // getAllProducts,
    addCart,
}
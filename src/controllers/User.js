const User = require("../models/user");
const catchAsync = require("../utils/catchAsync");

const getAllUsers = catchAsync(async (req, res) => {
    const user = await User.find();
    
    res.status(200).json({
        status: "ok",
        data: user,
    });
});

const addUser = catchAsync(async (req, res) => {
    let newUser = new User();
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.firstName = req.body.firstName;
    newProduct.lastName = req.body.lastName;
    newUser = await newUser.save();
    res.status(200).json({
        status: "ok",
        dataInserted: newProduct,
    });
});

module.exports = {
    getAllUsers,
    addUser,
}
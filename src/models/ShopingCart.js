const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    invoiceNumber: String,
    status: String,
    totalAmount: Number,
    user: String,
    products: [
    {
        productId: String,
        quantity: Number,
        price: Number
    }]
});

module.exports = mongoose.model('Cart', userSchema);
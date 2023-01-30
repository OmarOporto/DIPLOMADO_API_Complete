const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const productRouter = require("./routes/producto");
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/usuario");
const app = express();

app.use(express.json()); // req => body
app.use(morgan('dev'));

const port = process.env.PORT || 9000;

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.use("/api/v1/product/", productRouter);
app.use("/api/v1/auth/", authRouter);
app.use("/api/v1/users/", userRouter);

app.all("*", (req, res, next) => {
    throw new Error('route not found');
});

app.use((err, req, res, next) => {
    res.status(400).json({
        status: "error",
        message: err.message,
    });
});

//mongodb connection

mongoose.set('strictQuery', false);

mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=>console.log("connected to MongoDB Atlas"))
    .catch((error)=>console.error(error))

app.listen(port, () => console.log('server listen on port', port));

module.exports = app;
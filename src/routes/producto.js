const express = require("express");
const productRouter = express.Router();
const { getAllProducts, addProduct } = require("../controllers/Product.js")
const { login, signup, protect } = require("../controllers/Auth");
productRouter
    .route("/")
    .all(protect)
    .get(getAllProducts)
    .post(addProduct);

    
productRouter
    .route("/:id")
    .all(protect)
    .get((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "get a product",
            id: req.params.id
        })

    })
    .put((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "modify a product",
            id: req.params.id
        })

    })
    .delete((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "delete a product",
            id: req.params.id
        })

    })

module.exports = productRouter;

// //update a product
// router.put("/v1/product/:id",(req,res)=>{
//     const {id} = req.params;
//     const {name, quantity, code} = req.body;
//     userSchema
//         .updateOne({_id:id},{$set: {name,quantity, code}})
//         .then((data)=> res.json(data))
//         .catch((error)=>res.json({message: error}))

// });

// //delete a product
// router.delete("/v1/product/:id",(req,res)=>{
//     const {id} = req.params;
//     userSchema
//         .remove({_id:id})
//         .then((data)=> res.json(data))
//         .catch((error)=>res.json({message: error}))

// });

// module.exports = router;
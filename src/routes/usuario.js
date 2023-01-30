const express = require("express");
const userRouter = express.Router();
const { getAllUsers, addUser } = require("../controllers/User.js")
const { login, signup, protect } = require("../controllers/Auth");
userRouter
    .route("/")
    .all(protect)
    .get(getAllUsers)
    .post(addUser);

    
userRouter
    .route("/:id")
    .all(protect)
    .get((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "get an User",
            id: req.params.id
        })

    })
    .put((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "modify a User",
            id: req.params.id
        })

    })
    .delete((req, res) => {
        res.status(200).json({
            status: "ok",
            action: "delete an User",
            id: req.params.id
        })

    })

module.exports = userRouter;

// const express = require("express");
// const userSchema = require("../models/user");

// const router = express.Router();

// //create user
// router.post("/v1/user",(req,res)=>{
//     const user = userSchema(req.body);
//     user
//         .save()
//         .then((data)=> res.json(data))
//         .catch((error)=>res.json({message: error}))

// });

// //get all user
// router.get("/v1/user",(req,res)=>{
//     userSchema
//         .find()
//         .then((data)=> res.json(data))
//         .catch((error)=>res.json({message: error}))

// });

// //get a user
// router.get("/v1/user/:id",(req,res)=>{
//     const {id} = req.params;
//     userSchema
//         .findById(id)
//         .then((data)=> res.json(data))
//         .catch((error)=>res.json({message: error}))

// });

// //update a user
// router.put("/v1/user/:id",(req,res)=>{
//     const {id} = req.params;
//     const {name, age, email} = req.body;
//     userSchema
//         .updateOne({_id:id},{$set: {name,age,email}})
//         .then((data)=> res.json(data))
//         .catch((error)=>res.json({message: error}))

// });

// //delete a user
// router.delete("/v1/user/:id",(req,res)=>{
//     const {id} = req.params;
//     userSchema
//         .remove({_id:id})
//         .then((data)=> res.json(data))
//         .catch((error)=>res.json({message: error}))

// });

// module.exports = router;
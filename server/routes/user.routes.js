const express = require("express");
const router = express.Router();
const {createUser,getUsers,updateUsers, getUsersById, deleteUser}=require('../controllers/user.controller')


router.post("/createUser",createUser);
router.get("/",getUsers)

router.get("/getUser/:id",getUsersById)
router.put("/updateUser/:id",updateUsers)
router.delete("/deleteUser/:id",deleteUser)






module.exports=router
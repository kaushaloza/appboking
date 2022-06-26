import express from "express";
import User from "../models/User.js";
// import { createUser } from "../controllers/User.js";
import { updateUser } from "../controllers/user.js";
import { deleteUser } from "../controllers/user.js";
import { getUser } from "../controllers/user.js";
import { getAllUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();


router.get("/checkAuth", verifyToken, (req, res, next)=>{
    res.send("hllow user you are logged in");
})

router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
    res.send("Now you can delete your account");
})


router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
    res.send("You r admin now auth done, will have all control over all users");
})
//UPDATE

router.put("/:id", verifyUser, updateUser)
//DELETE

router.delete("/:id",verifyUser , deleteUser)
//GET

router.get("/:id",verifyUser, getUser)
//GET ALL

router.get("/",verifyAdmin, getAllUser)

export default router;
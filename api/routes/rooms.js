import express from "express";
import Room from "../models/Room.js";
import { createRoom } from "../controllers/room.js";
import { updateRoom } from "../controllers/room.js";
import { deleteRoom } from "../controllers/room.js";
import { getRoom } from "../controllers/room.js";
import { getAllRoom } from "../controllers/room.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();


//CREATE
router.post("/:hotelid",verifyAdmin,createRoom);
//UPDATE

router.put("/:id",verifyAdmin, updateRoom)
//DELETE

router.delete("/:id/:hotelid",verifyAdmin, deleteRoom)
//GET


// All the users can get list of Rooms so no need to verify 
router.get("/:id", getRoom)
//GET ALL

router.get("/", getAllRoom)





export default router;
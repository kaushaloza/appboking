import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

import { createError } from "../utils/error.js";


// wee need to create rooom and then will add to hotel inside room array
// we will add rooom id to that array

export const createRoom = async (req, res, next) => {

    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body)

    try{

        const savedRoom = await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId, {$push : {rooms: savedRoom._id}})
        }catch(err){
            next(err)
        }
        res.status(200).json(savedRoom);
    }catch(err){
        next(err);
    }
}


export const updateRoom = async (req, res, next) => {
    router.put("/:id", async (req, res) => {
    
        // const newHotel = new Hotel(req.body);
        try{
            //FindById and update returns previous doc. 
            const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
            res.status(200).json(updatedRoom);
    
        }catch(err){
            next(err);
        }
    })
}
export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    router.delete("/:id", async (req, res) => {
    
        // const newHotel = new Hotel(req.body);
        try{
    
            const deletedRoom = await Room.findByIdAndDelete(req.params.id);
            try{
                await Hotel.findByIdAndUpdate(hotelId, {$pull : {rooms: savedRoom._id}})
            }catch(err){
                next(err)
            }
            res.status(200).json("Room has been deleted");
    
        }catch(err){
            next(err);
        }
    })
}
export const getRoom = async (req, res, next) => {
    router.get("/:id", async (req, res) => {
    
        // const newHotel = new Hotel(req.body);
        try{
    
            const room = await Room.findById(req.params.id);
            res.status(200).json(room);
    
        }catch(err){
            next(err);
        }
    })
}
export const getAllRoom = async (req, res, next) => {
    router.get("/", async (req, res, next) => {
    
        // const newHotel = new Hotel(req.body);
        try{
    
            const rooms = await Room.find();
            res.status(200).json(rooms);
    
        }catch(err){
            next(err)
        }
    })
    
    
}
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express()
dotenv.config();


// Initial connection with mongodb

const connect = async () => {

try{
    await  mongoose.connect(process.env.MONGO);
    // console.log("Connected to mongodb");
}catch(error){
    throw error;
}
};


mongoose.connection.on("disconnected", () => {
    console.log("Disconnected due to some problem");
});
mongoose.connection.on("connected", () => {
    console.log("Connected to mongodb");
});

//Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)

app.use((err, req, res, next)=>{
    const errorStatus  = err.status || 500;
    const errMessage = err.message || "something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:err,
        message:errMessage,
        stack:err.stack
    });
    
})





app.listen(8000, () => {
    connect();
    console.log("Connected to backend")
})
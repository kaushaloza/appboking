import mongoose from 'mongoose';

// const { Schema } = mongoose;


const RoomSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
        
    },
    price:{
        type: Number,
        required:true,
        
    },
    maxPeople:{
        type: Number,
        required:true
    },
    roomNumbers:{
        type: [{number:Number, unavailabeDates: {type:[Date]} }],
    },
   
    desc:{
        type: String,
        required:true
    
    },
    
},
{
    timestamps:true
})

export default mongoose.model("Room", RoomSchema);
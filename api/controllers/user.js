import User from "../models/User.js";




export const updateUser = async (req, res, next) => {
    router.put("/:id", async (req, res) => {
    
        // const newUser = new User(req.body);
        try{
            //FindById and update returns previous doc. 
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
            res.status(200).json(updatedUser);
    
        }catch(err){
            next(err);
        }
    })
}
export const deleteUser = async (req, res, next) => {
    router.delete("/:id", async (req, res) => {
    
        // const newUser = new User(req.body);
        try{
    
            const deletedUser = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted");
    
        }catch(err){
            next(err);
        }
    })
}
export const getUser = async (req, res, next) => {
    router.get("/:id", async (req, res) => {
    
        // const newUser = new User(req.body);
        try{
    
            const user = await User.findById(req.params.id);
            res.status(200).json(user);
    
        }catch(err){
            next(err);
        }
    })
}
export const getAllUser = async (req, res, next) => {
    router.get("/", async (req, res, next) => {
    
        // const newUser = new User(req.body);
        try{
    
            const users = await User.find();
            res.status(200).json(users);
    
        }catch(err){
            next(err)
        }
    })
    
    
}
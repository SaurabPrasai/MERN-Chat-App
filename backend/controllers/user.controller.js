import User from "../models/user.models.js"


// not complete
export const getUsersForSidebar=async(req,res)=>{
    try {
        const loggedUserId=req.user._id;
        const allUsers=await User.find({_id:{$ne:loggedUserId}}).select("-password")
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({error:"Internal server"})
    }
}
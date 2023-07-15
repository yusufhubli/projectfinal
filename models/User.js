import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    description:String,
    image:String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const User = mongoose.models.User || mongoose.model("User",userSchema)
export default User 
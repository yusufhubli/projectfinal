import mongoose,{Schema,model,models} from "mongoose";

const userSchema = new Schema({
    name:String,
    email:String,
    password:String,
    description:String,
    image:String,
    country:{
        type:String,
        default:null
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const User = models.User || model("User",userSchema)
export default User 
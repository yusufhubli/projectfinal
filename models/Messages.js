import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    id:Number,
    senderId:String || mongoose.Schema.Types.ObjectId,
    receiverId:String||mongoose.Schema.Types.ObjectId,
    messages:[
       {  mid:String || mongoose.Schema.Types.ObjectId,
          Msg:String,
          time:{
             type:Date,
             default:Date.now()
          },
          position:{
             type:Boolean,
             default:false
          }
       }
    ],
   
 })
 const Message = mongoose.models.Message || mongoose.model("Message",messageSchema)
 export default Message 
 module.exports
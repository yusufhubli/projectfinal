import { ObjectId } from "mongodb";
import mongoose,{ model,models,Schema } from "mongoose";
 
const cardSchema = new mongoose.Schema({
    cardname:String,
    description:String,
    servicetype:String,
    images:String,
    plans:{
        basic:{
            planname:String,
            description:String,
            delivery:Number,
            revision:Number,
            price:Number

        },
        standard:{
            planname:String,
            description:String,
            delivery:Number,
            revision:Number,
            price:Number

        },
        premium:{
            planname:String,
            description:String,
            delivery:Number,
            revision:Number,
            price:Number

        }
    },
    createAt:{
        type:Date,
        default:Date.now()
    },
    sellerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },


})
const Card = models.Card ||  mongoose.model("Card",cardSchema)

export default Card
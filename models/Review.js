import mongoose,{Schema,model,models} from "mongoose";

const reviewSchema = new Schema({
    clientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    sellerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    rating:Number,
    comment:String,
})

const Review = models.Review || model("Review",reviewSchema)
export default Review
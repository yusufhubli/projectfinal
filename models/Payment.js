import mongoose,{Schema,model,models} from "mongoose";

const paymentSchema = new mongoose.Schema({
    clientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    sellerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    },
    price:Number,
    commission:Number,

})

const Payment = models.Payment || mongoose.model("Payment",paymentSchema)
export default Payment
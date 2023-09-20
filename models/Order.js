import mongoose,{Schema,model,models} from "mongoose";

const orderSchema = new mongoose.Schema({
  freelancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cardname:{
    type:String,
    required:true,
  },
  plan: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  delivery:{
    type:Number,
    default:null
  },
  sendedfile: {
     filename:String,
     content:String
  },
  deliveredfile: {
    filename:String,
     content:String,
  },
  status: {
    type: Boolean,
    default: false,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = models.Order || mongoose.model("Order",orderSchema)
export default Order
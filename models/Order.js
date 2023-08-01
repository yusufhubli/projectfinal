import mongoose,{Schema,model,models} from "mongoose";

const orderSchema = new Schema({
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
  sendedfile: {
     filename:String,
     content:String
  },
  deliveredfile: {
    type: String,
    default:null
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

const Order = models.Order || model("Order",orderSchema)
export default Order
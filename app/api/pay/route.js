import { NextResponse } from "next/server";
import connectToDB from "@/models/db";
import Order from "@/models/Order";
import Payment from "@/models/Payment";

export async function POST(req){
    await connectToDB()
    try {
        const body = await req.json()
        console.log(body)
    const {clientId,orderId,sellerId,price,commission,status} = body
    const order = await Order.findByIdAndUpdate({_id:orderId},{status:status})
    const pay = await Payment.create({
        clientId,
        orderId,
        sellerId,
        price,
        commission,
    })
    return NextResponse.json({message:"payment received"})
    } catch (error) {
        return NextResponse.json(error)   
    }
    
}

export async function GET(){
    await connectToDB()
    const payment = await Payment.find().populate("clientId")
    return NextResponse.json(payment)
}
import { NextResponse } from "next/server"
import Order from "@/models/Order"
import connectToDB from "@/models/db"

export async function GET(){
       await connectToDB()
    try {
        const order = await Order.find().populate('freelancer').populate("client")
        return NextResponse.json(order)
    } catch (error) {
        return NextResponse.json(error)
    }
}
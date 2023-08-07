import connectToDB from "@/models/db";
import { NextResponse } from "next/server";
import Order from "@/models/Order";

export async function GET(req,{params}){
    await connectToDB()
    try {
        const id = await params.id
        const res = await Order.findOne({_id:id})
        const file = res.deliveredfile.content
        return NextResponse.json(file)
    } catch (error) {
        return NextResponse.json(error)
    }
}
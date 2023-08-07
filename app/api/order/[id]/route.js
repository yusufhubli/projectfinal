import connectToDB from "@/models/db";
import { NextResponse } from "next/server";
import Order from "@/models/Order";

export async function GET(req,{params}){
    await connectToDB()
    try {
        const id = await params.id
        const res = await Order.findOne({_id:id})
        const file = res.sendedfile.content
        return NextResponse.json(file)
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function PUT(req,{params}){
    await connectToDB()
    try {
        const id = await params.id
        const body = await req.json()
        const {deliveredfile} = body
        const res = await Order.findByIdAndUpdate({_id:id},{deliveredfile})
        return NextResponse.json({message:"file is added"})
    } catch (error) {
        return NextResponse.json(error)
    }
}


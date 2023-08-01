import { NextResponse } from "next/server";
import connectToDB from "@/models/db";
import Card from "@/models/Card";

export const GET = async(req,{params})=>{
     await connectToDB()
        const id = params.id
        console.log(id)
        const data = await Card.findById(id).populate("sellerId")
        return NextResponse.json(data)
}
     
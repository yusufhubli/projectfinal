import { NextResponse } from "next/server";
import Message from "@/models/Messages";
import connectToDB from "@/models/db";

export const GET = async(req,{params}) =>{
    await connectToDB()
     const msg = await Message.findOne({id:1})
     return NextResponse.json(msg)
}
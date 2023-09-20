import { NextResponse } from "next/server";
import User from "@/models/User";
import connectToDB from "@/models/db";

export const POST = async(req,{params}) =>{
    await connectToDB()
     const id = await params.id
    // console.log("backend",id)
     const body = await req.json()
    // console.log(body)
     const {name,email,country,description,image} = body
     const user = await User.findOneAndUpdate({_id:id},{name,email,description,image,country})
     //console.log(data)
     return NextResponse.json({message:"profile is updated"})
}
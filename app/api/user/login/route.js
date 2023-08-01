import { NextResponse } from "next/server";
import connectToDB from "@/models/db";
import User from "@/models/User";
import jwt from "jsonwebtoken";

export async function POST(req){
    await connectToDB()
    try {
        const reqbody = await req.json()
        const {email,password} = reqbody
        const user = await User.findOne({email,password})
        console.log(user)
        if(!user){
            return NextResponse.json({message:"user dose not exist"})
        }
        const tokendata = {
            id:user._id,
            name:user.name,
            email:user.email
        }
        //reating token
        const token = jwt.sign(tokendata,process.env.JWT_SECRET, { expiresIn: "10h" })
        console.log(token)
        const response = NextResponse.json({
            message:"login successful",
            success:true
        })
        response.cookies.set("token",token,{httpOnly:true})
        return response
      //  return NextResponse.json({message:'welcome',id:user._id})
    } catch (error) {
        return NextResponse.json(error,{message:"backend error"})
    }
}
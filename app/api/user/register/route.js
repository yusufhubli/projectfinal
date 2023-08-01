import connectToDB from "@/models/db";
import { NextResponse,NextRequest } from "next/server";
import User from "@/models/User";

export async function POST(req){
      await connectToDB()
    try {
        const body = await req.json()
        console.log(body)
        const {name,email,password} = body
        const user = await User.findOne({email})
        console.log(user)
          if(user){
              return NextResponse.json({message:"user already exist"})
          }
        const newUser = new User({name,email,password})
        const saveUser = await newUser.save()
        console.log(saveUser)
        return NextResponse.json({meassage:"new user created"})
    } catch (error) {
        return NextResponse.json({error:error.message})
    }

}
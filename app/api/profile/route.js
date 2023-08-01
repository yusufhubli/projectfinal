import { NextResponse } from "next/server";
import User from "@/models/User";
import connectToDB from "@/models/db";
import { getUserId } from "@/helpers/getuserId";

export const POST = async(req) =>{
    const userId = await getUserId()
    await connectToDB()
     const body = await req.json()
     console.log(body)
     const {name,email,country,description,image} = body
     const user = await User.findOneAndUpdate({email},{name:name,email:email,description:description,image:image,country:country})
     const data = await user.save()
     //console.log(data)
     return NextResponse.json({meassage:"profile is updated"})
}
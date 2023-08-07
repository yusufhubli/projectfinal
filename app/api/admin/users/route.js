import connectToDB from "@/models/db";
import { NextResponse } from "next/server";
import User from "@/models/User";

export async function GET(){
    await connectToDB()
    const user = await User.find()
    return NextResponse.json(user)
}
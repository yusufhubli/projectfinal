import { NextResponse } from "next/server";
import connectToDB from "@/models/db";
import User from "@/models/User";

export async function GET() {
    await connectToDB()
    try {
        const user = await User.find()
        return NextResponse.json(user)
    } catch (error) {
        console.log(error)
    }

}
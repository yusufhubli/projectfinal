import connectToDB from "@/models/db";
import { NextResponse } from "next/server";
import Card from "@/models/Card";

export async function GET(){
    await connectToDB()
    const user = await Card.find().populate("sellerId")
    return NextResponse.json(user)
}
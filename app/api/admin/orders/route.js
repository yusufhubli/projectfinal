import connectToDB from "@/models/db";
import { NextResponse } from "next/server";
import Order from "@/models/Order";

export async function GET(){
    await connectToDB()
    const user = await Order.find()
    return NextResponse.json(user)
}
import { NextResponse } from "next/server";
import connectToDB from "@/models/db";
import Payment from "@/models/Payment";

export async function GET(){
    await connectToDB()
    try {
        const pay = await Payment.find().populate("clientId")
        return NextResponse.json(pay)
    } catch (error) {
        return NextResponse.json(error)
    }
}
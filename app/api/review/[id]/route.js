
import connectToDB from "@/models/db";
import { NextResponse } from "next/server";
import Review from "@/models/Review";

export async function GET(req,{params}){
      await connectToDB()
    try {
        const id = await params.id
        const review = await Review.find({sellerId:id}).populate("clientId")

       // console.log(body)
       // console.log(newGig)
        return NextResponse.json(review)
    } catch (error) {
        return NextResponse.json({error:error.message})
    }

}


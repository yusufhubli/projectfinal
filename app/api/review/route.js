
import connectToDB from "@/models/db";
import { NextResponse } from "next/server";
import Review from "@/models/Review";

export async function POST(req){
      await connectToDB()
    try {
        const body = await req.json()
       // console.log(body)
        const {clientId,sellerId,rating,comment} = body;
       // console.log('image name',images)
       // console.log('beackend',sellerId)
        const newGig = Review.create({
          clientId,
          sellerId,
          rating,
          comment
        });
       // console.log(newGig)
        return NextResponse.json({meassage:"review is added"})
    } catch (error) {
        return NextResponse.json({error:error.message})
    }

}


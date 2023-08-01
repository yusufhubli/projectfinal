import connectToDB from "@/models/db";
import { NextResponse } from "next/server";
import Card from "@/models/Card";
import { Cardo } from "next/font/google";

export async function POST(req){
      await connectToDB()
    try {
        const body = await req.json()
       // console.log(body)
        const { cardname, description, servicetype,images, plans,sellerId } = body;
       // console.log('image name',images)
       // console.log('beackend',sellerId)
        const newGig = Card.create({
          cardname,
          description,
          servicetype,
          images,
          plans,
          sellerId
        });
       // console.log(newGig)
        return NextResponse.json({meassage:"new user created"})
    } catch (error) {
        return NextResponse.json({error:error.message})
    }

}

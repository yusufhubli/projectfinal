import connectToDB from "@/models/db";
import { NextResponse } from "next/server";
import Card from "@/models/Card";


export async function DELETE(req,{params}){
    await connectToDB()
    try {
      const id = await params.id
      console.log(id)
      const res = await Card.findByIdAndDelete({_id:id})
      return NextResponse.json({meassage:"card is deleted"})    
    } catch (error) {
      return NextResponse.json(error)
    } 
  }
  
  export async function PUT(req,{params}){
    await connectToDB()
    try {
      const id = await params.id
      const body = await req.json()
      const {cardname,description,servicetype,images,plans,sellerId} = body
      const res = await Card.findByIdAndUpdate({_id:id},{cardname,description,servicetype,images,plans,sellerId})
      return NextResponse.json({meassage:"card is updated"},{res})
    } catch (error) {
      return NextResponse.json(error)
    }
  }
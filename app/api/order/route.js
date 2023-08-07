import connectToDB from "@/models/db";
import { NextResponse } from "next/server";
import Order from "@/models/Order";

export async function POST(req){
      await connectToDB()
    try {
        const body = await req.json()
       console.log("backend",body)
        const { freelancer,client,title,description,cardname,plan,price,sendedfile } = body;
       // console.log('image name',images)
       // console.log('beackend',sellerId)
        const newOrder = Order.create({
          freelancer,
          client,
          title,
          description,
          cardname,
          plan,
          price,
          sendedfile,
        });
       // console.log(newGig)
        return NextResponse.json({meassage:" ordered successfullly"})
    } catch (error) {
        return NextResponse.json({error:error.message})
    }

}
export async function GET(){
  await connectToDB()
try {
   const order = await Order.find().populate('freelancer').populate("client")
   return NextResponse.json(order)
} catch (error) {
   return NextResponse.json(error)
}
}

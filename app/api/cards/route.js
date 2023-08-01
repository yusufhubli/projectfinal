import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectToDB from "@/models/db";
import Card from "@/models/Card";
import User from "@/models/User";
import { ObjectId } from "mongodb";
export async function GET(){
    await connectToDB()
    const data = await Card.find().populate("sellerId")
   return NextResponse.json(data)
}



 export async function POST(res){
    await connectToDB()
    const user = Card.create({
        "cardname":"i will do wed design for you",
    "description":"iure sunt reiciendis vel optio! Maxime provident sapiente, deleniti, quaedi harum quos amet assumenda quidem quisquam ratione impedit nulla recusandae debitis dolorum! Illum possimus obcaecati alias optio earumquaerat laborum ea, explicabo tenetur error, impedit ullam maiores eumpariatur ratione ipsum aut nihil. Culpa expedita tempora error veniamlaudantium molestiae rerum quasi. Placeat, cumque cum ipsum aliquidcorrupti reprehenderit architecto delectus doloremque nihil ducimus, esse suntfacilis accusantium rem mollitia ut. Quibusdam veritatis vero quis magni",
    "images":{
        "image1":"image/py.png",
        "image2":"image/py.png",
        "image3":"image/py.png"
    },
    "plans":{
        "basic":{
            "palanname":"two pages",
            "description":"sunt reiciendis vel optio! Maxime provident sapiente, deleniti, quaedi harum quos amet assumenda quidem quisquam ratione impedit nulla recusandae",
            "delivery":2,
            "revision":1,
            "price":500
        },
        "standard":{
            "palanname":"three pages",
            "description":"sunt reiciendis vel optio! Maxime provident sapiente, deleniti, quaedi harum quos amet assumenda quidem quisquam ratione impedit nulla recusandae",
            "delivery":3,
            "revision":2,
            "price":1500
        },
        "premium":{
            "palanname":"four pages",
            "description":"sunt reiciendis vel optio! Maxime provident sapiente, deleniti, quaedi harum quos amet assumenda quidem quisquam ratione impedit nulla recusandae",
            "delivery":4,
            "revision":2,
            "price":2500
        },
    },
    "sellerId":new ObjectId("64ae81f81ded411c7ac2c0e0")

    })
    return NextResponse.json('data is added')
}

import jwt from "jsonwebtoken";

import { cookies } from "next/headers";

export const getUserId = ()=>{

  try {
    const getcookie =cookies()
    const token = getcookie.get("token").value || ""
    const decode = jwt.verify(token,process.env.JWT_SECRET)
    console.log(decode.id)
    return decode.id
  } catch (error) {
     console.log(error)   
  }
}

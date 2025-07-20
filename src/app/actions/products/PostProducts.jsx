"use server"
import dbConnect from "@/lib/dbConnect";
export const PostProducts = async (newData)=>{


  try{
    
    const result = await dbConnect('blogs').insertOne(newData)
    return result
  }catch(err){

    console.log(err);

    return []
    
  }
        
    }


























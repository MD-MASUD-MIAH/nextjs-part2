"use server"
import dbConnect, { collectionName } from "@/lib/dbConnect";
export const PostProducts = async (newData)=>{


  try{
    
    const result = await dbConnect(collectionName.PRACTICE_DATA).insertOne(newData)
    return result
  }catch(err){

    console.log(err);

    return []
    
  }
        
    }


























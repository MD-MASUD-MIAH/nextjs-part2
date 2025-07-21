"use server"
import dbConnect, { collectionName } from "@/lib/dbConnect";
export const getProducts = async ()=>{


    try{

        const data =  await dbConnect(collectionName.PRACTICE_DATA).find({}).toArray()

        return data
    }catch(err){



        console.log(err);

        return []
        
    }

























}
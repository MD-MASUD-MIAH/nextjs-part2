'use server'

import dbConnect, { collectionName } from "@/lib/dbConnect"

export const registerUser = async (payload)=>{


try{

    const result  = await dbConnect(collectionName.TEST_USER).insertOne(payload)
return result
}catch(err){


    console.log(err);

    return null
    
}

}
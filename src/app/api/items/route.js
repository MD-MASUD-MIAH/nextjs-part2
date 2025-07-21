import dbConnect, { collectionName } from "@/lib/dbConnect"

export async function GET() {

    const data = await dbConnect(collectionName.PRACTICE_DATA).find().toArray()
    return Response.json({data})
}


export async function POST(req) {

    const newData = await req.json()

    const data = await dbConnect(collectionName.PRACTICE_DATA).insertOne(newData)
    return Response.json({data})
}





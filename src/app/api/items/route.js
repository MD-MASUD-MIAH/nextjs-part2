import dbConnect from "@/lib/dbConnect"

export async function GET() {

    const data = await dbConnect('blogs').find().toArray()
    return Response.json({data})
}


export async function POST(req) {

    const newData = await req.json()

    const data = await dbConnect('blogs').insertOne(newData)
    return Response.json({data})
}





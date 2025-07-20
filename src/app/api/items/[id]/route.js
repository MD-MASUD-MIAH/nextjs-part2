import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const p = await params;

  const singleData = await dbConnect("blogs").findOne({
    _id: new ObjectId(p.id),
  });

  return Response.json(singleData);
}
export async function DELETE(req, { params }) {
  console.log(params);
  const p = await params;
  const singleData = await dbConnect("blogs").deleteOne({
    _id: new ObjectId(p.id),
  });

  return Response.json(singleData);
}
// adjust path as needed

export async function PATCH(req, { params }) {
  const p = await params;

  const filter = {
    _id: new ObjectId(p.id),
  };

  const postData = await req.json();

  const singleData = await dbConnect("blogs").updateOne(
    filter,
    { $set: { ...postData } },
    { upsert: true }
  );

  return Response.json(singleData);
}

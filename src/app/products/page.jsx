import dbConnect from "@/lib/dbConnect";
import { getProducts } from "../actions/products/getproducts";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  // const res = await fetch(`https://datafetch-azure.vercel.app/api/items`)

  // // Check if the response is OK and has valid JSON
  // if (!res.ok) {
  //   console.error("Failed to fetch items:", res.status, res.statusText);
  //   return <p>Error loading products</p>;
  // }

  // let data = {};
  // try {
  //   data = await res.json();
  // } catch (err) {
  //   console.error("Invalid JSON:", err);
  //   return <p>Error parsing data</p>;
  // }

  const data = await getProducts()

  return (
    <div className="flex flex-col items-center justify-center">
      {data?.map((res) => (
        <div key={res._id}>
          <p>{res.name}</p>
          <p>{res.title}</p>
        </div>
      ))}
    </div>
  );
}

"use client";

import { PostProducts } from "@/app/actions/products/PostProducts";
import { useRouter } from "next/navigation";


 // required if this is in the /app directory

function ProductsAddForm() {

  const router = useRouter()
  const handleSubmit =async (e) => {
    e.preventDefault();
    const name = e.target.productsName.value;
    console.log(name);

    
    const payload = {name}


    // const res = await fetch(`https://datafetch-azure.vercel.app/api/items`,{
    //     method:'POST',
    //     body:JSON.stringify(payload),
    //     headers:{
    //   'Content-Type':'application/json'
          
    //     }
    // })

  // const result = await res.json()

  const result = await PostProducts(payload)
  console.log(result);
  e.target.reset()
  router.push('/products')
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="productsName"
          placeholder="Product Name"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductsAddForm;

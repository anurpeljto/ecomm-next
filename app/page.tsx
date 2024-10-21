import ProductContainer from "@/components/ProductContainer";
import { Types } from "mongoose";

export type ImageType = {
  src: string,
  _id: Types.ObjectId
}

export type ProductType = {
  _id: Types.ObjectId,
  name: string,
  category: Types.ObjectId,
  image: ImageType[],
  price: number
}


const fetchProducts = async(): Promise<ProductType[]> => {
  try {
    const response = await fetch('http://localhost:3000/api/products');
    const products = await response.json();
    return products;
  } catch (error:any) {
    throw new Error(error.message);
  }
}


export default async function Home() {
  const products = await fetchProducts();
  return (
    <main className="min-h-screen border-t-2 border-opacity-30 dark:border-gray-900 border-gray-200 md:mx-10 mx-5 flex flex-col justify-start items-start sm:gap-10 gap-5">
      <div className="border-b-2 border-gray-200 dark:border-gray-900 w-full py-10 flex flex-col justify-center">
        <h1 className="font-bold text-7xl">All clothes</h1>
      </div>      
      
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 grid-flow-row gap-10 h-full w-full">
          {
            products && products.map((product: ProductType, index: number) => (
              <ProductContainer key={index} product={product}/>
            ))
          }
      </div>
    </main>
  );
}

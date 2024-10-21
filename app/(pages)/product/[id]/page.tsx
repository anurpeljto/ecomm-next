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


const fetchProduct = async(id: string): Promise<ProductType> => {
  try {
    const response = await fetch(`http://localhost:3000/api/products/${id}`);
    const products = await response.json();
    const product = products.product;
    return product;
  } catch (error:any) {
    throw new Error(error.message);
  }
}


export default async function Product({params}: any) {
  const product = await fetchProduct(params.id);
  return (
    <main className="min-h-screen border-t-2 border-opacity-30 dark:border-gray-900 border-gray-200 md:mx-10 mx-5 flex flex-row justify-start items-start sm:gap-10 gap-5 py-5">
        <div className="flex-1">
          <img src={product.image[0].src} alt="Product image" className="h-full w-full object-contain"/>
        </div>

        <div className="flex-1 flex flex-col gap-5 justify-start align-center">
            <h1 className="sm:text-3xl text-xl">{product.name}</h1>
            <span className="sm:text-xl text-lg">{product.price}</span>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti laboriosam accusantium reprehenderit excepturi iste rem autem eligendi omnis eos et. Cupiditate odit eum deserunt ad? Possimus odit quas qui consequuntur!
            </p>
        </div>
    </main>
  );
}

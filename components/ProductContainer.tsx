import Image from 'next/image'
import React from 'react'
import { ProductType } from '@/app/page'
import Link from 'next/link';

interface ProductContainerProps {
  product: ProductType;
}

const ProductContainer = ({product} : ProductContainerProps) => {
  let category = '';

  switch(product.category.toString()) {
    case '66e2d33ada1ea24177058e10':
      category = 'Women';
      break;
    case '66e2d59b8b9d809527fef9de':
      category = 'Men';
      break;
    case '66e2d5a18b9d809527fef9e0':
      category = 'Kids';
      break;
  }

  return (
    <Link href={`/product/${product._id}`} className='flex group flex-col items-start justify-center overflow-hidden gap-2 cursor-pointer dark:hover:bg-white hover:bg-black transform-all duration-500'>
      <Image src={`${product.image[0].src}`} alt='Male model' height={200} width={350} className='object-contain bg-gray-200 dark:bg-compBlack px-5' />
      <div className='flex flex-col group-hover:text-white dark:group-hover:text-compBlack'>
        <span className='text-lg'>{category}</span>
        <span>{product.name}</span>
      </div>

      <span className='text-gray-400'>{product.price}</span>
    </Link>
  )
}

export default ProductContainer

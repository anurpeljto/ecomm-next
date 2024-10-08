import Image from 'next/image'
import React from 'react'

type ProductContainerProps = {
    brand: string,
    title: string,
    price: string
}

const ProductContainer = ({title, brand, price} : ProductContainerProps) => {
  return (
    <div className='flex group flex-col items-start justify-center overflow-hidden gap-2 cursor-pointer dark:hover:bg-white hover:bg-black transform-all duration-500'>
      <Image src='/model.png' alt='Male model' height={200} width={350} className='object-contain bg-gray-200 dark:bg-compBlack' />
      <div className='flex flex-col group-hover:text-white dark:group-hover:text-compBlack'>
        <span className='text-lg'>{brand}</span>
        <span>{title}</span>
      </div>

      <span className='text-gray-400'>{price}</span>
    </div>
  )
}

export default ProductContainer

import Image from 'next/image'
import React from 'react'
import { ProductType } from '@/app/page'

const ProductContainer = ({name, company, price} : ProductType) => {
  return (
    <div className='flex group flex-col items-start justify-center overflow-hidden gap-2 cursor-pointer dark:hover:bg-white hover:bg-black transform-all duration-500'>
      <Image src='/pngwing.com(1).png' alt='Male model' height={200} width={350} className='object-contain bg-gray-200 dark:bg-compBlack px-5' />
      <div className='flex flex-col group-hover:text-white dark:group-hover:text-compBlack'>
        <span className='text-lg'>{company}</span>
        <span>{name}</span>
      </div>

      <span className='text-gray-400'>${price.toFixed(2)}</span>
    </div>
  )
}

export default ProductContainer

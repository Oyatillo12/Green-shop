import { ProductType } from '@/service/products/Products'
import Image from 'next/image'
import React from 'react'

const ProductItem: React.FC<{ product: ProductType }> = ({ product }) => {
    return (
        <div className='w-[250px]' >
            <Image priority style={{ width: "250px", height: "250px"}} src={product.image_url ? product.image_url[0] : "/logo.svg"} alt={product.product_name ? product.product_name : "product img"} width={250} height={250} />
            <h3 className='mt-[12px] text-[16px] text-[#3D3D3D]'>{product.product_name}</h3>
            <div className='flex items-center space-x-4 mt-[6px]'>
                <span className='text-[#46A358] text-[18px]'>${product.cost}</span>
                <span className='text-[#A5A5A5] discount-price text-[18px] line-through'>${Number(product.cost) + Number(product?.discount)}</span>
            </div>
        </div>
    )
}

export default ProductItem

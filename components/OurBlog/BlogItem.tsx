import Image from 'next/image'
import React from 'react'
import { BlogsType } from './OurBlog'
import { ArrowIcon } from '@/public/images/icon'

const BlogItem: React.FC<{ item: BlogsType }> = ({ item }) => {
    return (
        <div className='w-[268px]'>
            <Image style={{ width: "268px", height: "195px", }} alt='blog images' src={item.img} width={268} height={195} />
            <div className='p-3 bg-[#FBFBFB]'>
                <p className='text-[14px] text-[#46A358] mb-1'>{item.date}</p>
                <h3 className='text-[20px] text-[#3D3D3D] leading-[26px] mb-1 font-bold'>{item.title}</h3>
                <p className='text-[14px] text-[#727272] mb-2 line-clamp-2'>{item.description} </p>
                <button className='flex items-center space-x-2 hover:text-[#46A358] duration-300'><span>Read More</span> <ArrowIcon /></button>
            </div>
        </div>
    )
}

export default BlogItem

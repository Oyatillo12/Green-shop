import { ArrowIcon } from '@/public/images/icon'
import Image from 'next/image'
import React from 'react'
import BlogItem from './BlogItem'

export interface BlogsType {
    id: number
    img: string
    date: string
    title: string
    description: string
}

const OurBlog = () => {
    const blogsData:BlogsType[] = [
        {
            id:1,
            img:'/blog-img1.png',
            date:"September 12  I Read in 6 minutes",
            title:'Cactus & Succulent Care Tips',
            description:'Cacti are succulents are easy care plants for any home or patio.'
        },
        {
            id:2,
            img:'/blog-img2.png',
            date:"September 13  I Read in 2 minutes",
            title:"Top 10 Succulents for Your Home",
            description:'Cacti are succulents are easy care plants for any home or patioBest in hanging baskets. Prefers medium to high light.'
        },
        {
            id:3,
            img:'/blog-img3.png',
            date:"September 15  I Read in 3 minutes",
            title:"Cacti & Succulent Care Tips",
            description:"Cacti and succulents thrive in containers and because most are.."
        },
        {
            id:4,
            img:'/blog-img4.png',
            date:"September 15  I Read in 2 minutes",
            title:"Best Houseplants Room by Room",
            description:'The benefits of houseplants are endless. In addition to..'
        }
    ]
    return (
        <section className='mb-[100px]'>
            <h2 className='text-center text-[30px] font-bold text-[#3D3D3D] mb-[15px]'>Our Blog Posts</h2>
            <p className='text-[14px] mb-[35px] text-center text-[#727272] leading-6'>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
            <div className='flex items-center justify-between'>
                {blogsData.map((item:BlogsType) => <BlogItem key={item.id} item={item}/>)}
            </div>
        </section>
    )
}

export default OurBlog

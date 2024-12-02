import Button from '@/helper/components/button/Button'
import { ArrowIcon } from '@/public/images/icon'
import Image from 'next/image'
import React from 'react'

const Plants = () => {

    return (
        <section className='mt-[100px] flex items-center justify-between mb-[138px]'>
            <div className='max-w-[49%] w-full relative bg-[#FBFBFB] rounded-lg  flex text-end justify-end pr-[30px]'>
                <Image className='absolute left-0 bottom-0' priority style={{ width: "292px", height: "292px", objectFit: "cover" }} src={'/plant.png'} alt='plant img' width={292} height={292} />
                <div className='pb-[46px] pt-[37px] w-[292px] flex flex-col justify-end items-end '>
                    <h2 className='text-[18px] w-[170px] uppercase font-bold text-[#3D3D3D] mb-4'>Summer cactus & succulents</h2>
                    <p className='text-[14px] text-[#727272] mb-4'>
                        We are an online plant shop offering a wide range of cheap and trendy plants
                    </p>
                    <Button extraStyle='w-[140px] ' title='Find More' type='button' rightIcon={<ArrowIcon/>}/>
                </div>
            </div>
            <div className='max-w-[49%] w-full relative bg-[#FBFBFB] rounded-lg  flex text-end justify-end pr-[30px]'>
                <Image className='absolute left-0 bottom-0' priority style={{ width: "292px", height: "292px", objectFit: "cover" }} src={'/styling.png'} alt='plant img' width={292} height={292} />
                <div className='pb-[46px] pt-[37px] w-[292px] flex flex-col justify-end items-end '>
                    <h2 className='text-[18px] w-[150px]  font-bold text-[#3D3D3D] mb-4 uppercase'>Styling Trends & much more</h2>
                    <p className='text-[14px] text-[#727272] mb-4'>
                        We are an online plant shop offering a wide range of cheap and trendy plants
                    </p>
                    <Button extraStyle='w-[140px] ' title='Find More' type='button' rightIcon={<ArrowIcon/>}/>
                </div>
            </div>
        </section>
    )
}

export default Plants

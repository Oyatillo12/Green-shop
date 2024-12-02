import { EmailIcon, LocationIcon, TelIcon } from '@/public/images/icon'
import Image from 'next/image'
import React from 'react'

const FooterCenter = () => {
    return (
        <div className='py-[22px] px-[25px] bg-[#46A3581A] flex items-center justify-between'>
            <Image priority style={{ width: "150px", height: "34px" }} src={'/logo.svg'} alt='Logo icon' width={150} height={34} />
            <div className='flex items-center space-x-2 w-[200px]'>
                <LocationIcon />
                <p className='text-[14px] leading-[22px] text-[#3D3D3D]'>70 West Buckingham Ave.
                    Farmingdale, NY 11735</p>
            </div>
            <div className='flex items-center space-x-2 w-[176px]'>
                <EmailIcon />
                <a href='email:contact@greenshop.com' className='text-[14px] leading-[22px] text-[#3D3D3D]'>contact@greenshop.com</a>
            </div>
            <div className='flex items-center space-x-2 w-[176px]'>
                <TelIcon />
                <a href='tel:8801911717490' className='text-[14px] leading-[22px] text-[#3D3D3D]'>+88 01911 717 490</a>
            </div>
        </div>
    )
}

export default FooterCenter

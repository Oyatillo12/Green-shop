import React from 'react'
import FooterTop from './FooterTop'
import FooterCenter from './FooterCenter'
import FooterBottom from './footerBottom'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className='w-[1200px] mx-auto bg-[#FBFBFB] border-b-[#46A35833] border-b-[2px]'>
        <FooterTop />
        <FooterCenter />
        <FooterBottom />
      </div>
      <div className='text-center text-sm text-[#3D3D3D] py-4'>
        © 2021 GreenShop. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer

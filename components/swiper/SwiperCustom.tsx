"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductImg from '../../public/product.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Button from '../../helper/components/button/Button';
import Image from 'next/image';

export default function SwiperCustom() {
  return (
    <section>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide >
          <div className='!w-[530px] '>
            <p className="text-[14px] text-[#3D3D3D] mb-[7px] tracking-[10%] leading-4 font-medium" data-swiper-parallax="-300">
              Welcome to GreenShop
            </p>
            <h2 className="font-extrabold text-[60px] leading-[60px] text-[#3D3D3D] mb-[5px]" data-swiper-parallax="-200">
              Let’s Make a
              Better <span className='text-[#46A358]'> Planet</span>
            </h2>
            <div className="text" data-swiper-parallax="-100">
              <p className='text-[14px] text-[#727272] mb-[44px]'>
                We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
              </p>
              <Button type='button' title='SHOP NOW' extraStyle='w-[140px] !py-[10px]' onClick={() => { }} />
            </div>
          </div>
          <Image priority width={518} height={518} src={ProductImg} alt='Product img' />
        </SwiperSlide>
        <SwiperSlide >
          <div className='!w-[530px] '>
            <p className="text-[14px] text-[#3D3D3D] mb-[7px] tracking-[10%] leading-4 font-medium" data-swiper-parallax="-300">
              Welcome to GreenShop
            </p>
            <h2 className="font-extrabold text-[60px] leading-[60px] text-[#3D3D3D] mb-[5px]" data-swiper-parallax="-200">
              Let’s Make a
              Better <span className='text-[#46A358]'> Planet</span>
            </h2>
            <div className="text" data-swiper-parallax="-100">
              <p className='text-[14px] text-[#727272] mb-[44px]'>
                We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
              </p>
              <Button type='button' title='SHOP NOW' extraStyle='w-[140px] !py-[10px]' onClick={() => { }} />
            </div>
          </div>
          <Image priority width={518} height={518} src={ProductImg} alt='Product img' />
        </SwiperSlide>
        <SwiperSlide >
          <div className='!w-[530px] '>
            <p className="text-[14px] text-[#3D3D3D] mb-[7px] tracking-[10%] leading-4 font-medium" data-swiper-parallax="-300">
              Welcome to GreenShop
            </p>
            <h2 className="font-extrabold text-[60px] leading-[60px] text-[#3D3D3D] mb-[5px]" data-swiper-parallax="-200">
              Let’s Make a
              Better <span className='text-[#46A358]'> Planet</span>
            </h2>
            <div className="text" data-swiper-parallax="-100">
              <p className='text-[14px] text-[#727272] mb-[44px]'>
                We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
              </p>
              <Button type='button' title='SHOP NOW' extraStyle='w-[140px] !py-[10px]' onClick={() => { }} />
            </div>
          </div>
          <Image priority width={518} height={518} src={ProductImg} alt='Product img' />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

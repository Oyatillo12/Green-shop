"use client"

import { usePathname } from 'next/navigation';
import React from 'react';

interface ShopLayout {
    children: React.ReactNode;
}

const ShopLayout = ({children}:ShopLayout) => {
  const pathname = usePathname();

  return (
    <div className='w-[1200px] mx-auto h-full'>
      <p className='py-[40px]'><strong>Home</strong> / Shop {pathname.includes("shopping-card") ? "/ Shopping Cart" : ""}</p>
      {children}
    </div>
  )
}

export default ShopLayout

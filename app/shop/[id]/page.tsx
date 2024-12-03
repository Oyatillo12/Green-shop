"use client";

import CustomSkeleton from '@/components/CustomSkeleton';
import Button from '@/helper/components/button/Button';
import { useAxios } from '@/hooks/useAxios';
import { EmailIcon, FacebookIcon, LikeIcon, LinkedinIcon, TwitterIcon } from '@/public/images/icon';
import { ProductType } from '@/service/products/Products';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from 'antd';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React, { useEffect, useLayoutEffect, useState } from 'react'


type IconType = {
  id: string;
  href: string;
  component: React.ReactNode;
};

const SinglePage = () => {
  const { id } = useParams();
  const axiosInstance = useAxios();
  const [product, setProduct] = useState<ProductType | null>(null)
  const [selectedSize, setSelectedSize] = useState<string>("");
  const iconslist: IconType[] = [
    {
      id: 'facebook',
      href: 'https://www.facebook.com',
      component: <FacebookIcon />
    },
    {
      id: 'twitter',
      href: 'https://www.twitter.com',
      component: <TwitterIcon />
    },
    {
      id: 'linkedin',
      href: 'https://www.linkedin.com',
      component: <LinkedinIcon />
    },
    {
      id: 'email',
      href: 'mailto:example@example.com',
      component: <EmailIcon />
    }
  ];


  async function getData() {
    const response = await axiosInstance.get(`/product/${id}`);
    return response.data;
  }

  const { data, isPending } = useQuery({
    queryKey: ['singlePage', id],
    queryFn: () => getData(),
  });

  useEffect(() => {
    if (data) {
      setProduct(data)
      setSelectedSize(data.size[0])
    }
  }, [isPending, JSON.stringify(data)]);

  console.log(data);
  

  return (
    <div>
      <CustomSkeleton isLoading={isPending} />
      <div className="flex items-start justify-between">
        <div>
          <Image
            priority
            style={{ width: "404px", height: "404px", objectFit: "cover" }}
            src={product?.image_url ? product?.image_url[0] : '/logo.svg'}
            alt="logo img"
            width={404}
            height={404}
          />
        </div>
        <div className="max-w-[573px] w-full">
          <h2 className="text-[#3D3D3D] text-[28px] font-bold mb-5">
            {product?.product_name}
          </h2>
          <div className="pb-[13px] border-b-[1px] border-b-[#46A35880] flex items-center justify-between mb-[15px]">
            <span className="text-[22px] text-[#46A358] font-bold">
              ${product?.cost}.00
            </span>
          </div>
          <strong className="text-[15px] text-[#3D3D3D] mb-[10px]">
            Short Description:
          </strong>
          <p className="mb-6 text-[14px] leading-6 text-[#727272]">
            {product?.short_description}
          </p>
          <strong
            style={{ marginBottom: "10px" }}
            className="text-[15px] text-[#3D3D3D] mb-[10px] block"
          >
            Size:
          </strong>
          <div className="flex items-center space-x-[10px]">
            {product?.size?.map((size) => (
              <button
                onClick={() => setSelectedSize(size)}
                className={`w-[28px] h-[28px] rounded-full border ${selectedSize === size
                  ? "border-[#46A358] text-[#46A358]"
                  : "border-[#EAEAEA] text-[#727272]"
                  } text-[18px] font-bold `}
                key={size}
              >
                {size.charAt(0)}
              </button>
            ))}
          </div>
          <div className="mt-[29px] space-x-[26px] flex items-center">
            <div className="flex items-center space-x-3">
              <Button
                type="button"
                extraStyle="w-[33px] h-[33px] !rounded-full font-bold "
                title="-"
              />
              <span>1</span>
              <Button
                type="button"
                extraStyle="w-[33px] h-[33px] !rounded-full font-bold "
                title="+"
              />
            </div>
            <div className="flex items-center space-x-[10px]">
              <Button
                title="BUY NOW"
                extraStyle="w-[130px]"
                type="button"
              />
              <Button
                title="ADD TO CART"
                extraStyle="w-[130px] ml-[10px] !bg-transparent !text-[#46A358] border border-[#46A358]"
                type="button"
              />
              <button className="p-[7px] border border-[#46A358] rounded-lg text-[#46A358]">
                <LikeIcon />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-1 mt-[26px]">
            <span className="text-[#727272]/60 text-[15px]">Tags:</span>
            {product?.tags?.map((tag) => (
              <span className="text-[#727272] text-[15px]" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-4 mt-[18px]">
            <strong className="text-[#3D3D3D] text-[15px]">
              Share this products:
            </strong>
            {iconslist.map((icon) => (
              <a
                key={icon.id}
                id={icon.id}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon.component}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[92px] mb-[127px]">
        <div className="w-full pb-3 border-b-[1px] border-[#EAEAEA]">
          <p className="text-[17px] relative inline text-[#46A358] font-bold before:bg-[#46A358] before:h-[2px] before:w-full before:absolute before:bottom-[-15px]">
            Product Description
          </p>
        </div>
        <p className="mt-[18px] text-[14px] text-[#727272] leading-6">
          {product?.product_description}
        </p>
      </div>
    </div>
  )
}

export default SinglePage;

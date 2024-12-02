'use client'
import React, { useContext, useState } from "react";
import './style.css';
import { Context } from "@/context/FilterContext";
import { useQuery } from "@tanstack/react-query";
import { useAxios } from "@/hooks/useAxios";
import InputSlider from "@/components/Slider/InputSlider";
import Button from "@/helper/components/button/Button";
import SizeProducts from "@/components/SizeProducts";
import Image from "next/image";
import { Skeleton } from "antd";

interface Category {
    category_name: string
    category_id: string
}

const Category = () => {
    const [value, setValue] = useState<number[]>([25, 777]);

    const axios = useAxios();
    const { data = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: () => axios.get('/categories?page=1&limit=100').then(res => res.data.categories)
    })

    const { setCategoryId, categoryId, setMinPrice, setMaxPrice } = useContext(Context)

    function handleSelect(item: Category) {
        setCategoryId(item.category_name);
    }
    function handleAllProducts() {
        setCategoryId("");
    }
    function handleFilterPrice() {
        setMinPrice(value[0]);
        setMaxPrice(value[1]);
    }

    return (
        <>{isLoading ? (
            <div className="skeletons flex flex-col gap-4">
                <Skeleton loading active style={{ width: "100%", height: "40px" }} />
                <Skeleton loading active style={{ width: "100%", height: "150px" }} />

                <Skeleton loading active style={{ width: "100%", height: "60px" }} />
                <Skeleton loading active style={{ width: "100%", height: "30px" }} />
                <Skeleton loading active style={{ width: "100%", height: "50px" }} />

                <Skeleton loading active style={{ width: "100%", height: "100px" }} />

                <Skeleton loading active style={{ width: "310px", height: "470px" }} />
            </div>
        ) : <div className="category rounded-lg pt-2">
            <h2 style={{paddingLeft:"18px"}} className="text-[18px] font-bold text-[#3D3D3D] mb-2">Categories</h2>
            <ul className="category-list ">
                <li onClick={handleAllProducts} className={`text-[#3D3D3D]  cursor-pointer ${categoryId == "" ? "text-[#46A358] font-bold" : "text-[#3D3D3D]"}`}>
                    <span className=" text-[15px]">All</span>
                </li>
                {data.map((item: Category, index: number) => (
                    <li onClick={() => handleSelect(item)} key={index} className={`text-[#3D3D3D] category-item cursor-pointer ${categoryId == item?.category_name ? "text-[#46A358] font-bold" : "text-[#3D3D3D]"}`}>
                        <span className=" text-[15px]">{item?.category_name}</span>
                    </li>
                ))}
            </ul>
            <div style={{ marginBottom: "24px", marginTop: "24px", paddingLeft:"18px"}} className=" ">
                <h2  className="text-[18px] font-bold text-[#3D3D3D] mt-6" >Price Range</h2>
                <div style={{padding:"0 16px"}} >
                    <InputSlider setValue={setValue} value={value} />
                    <p style={{ marginBottom: "16px" }} className="text-[15px] text-[#3D3D3D]  mt-4">Price: <span className="text-[#46A358] font-bold">${value[0] + "-" + "$" + value[1]}</span></p>
                    <Button title="filter" type="button" extraStyle="w-[80px] hover:opacity-80 duration-300" onClick={handleFilterPrice} />
                </div>
            </div>
            <SizeProducts />
            <Image priority style={{ width: "310px", height: "470px", objectFit: "cover" }} src={'/discount.png'} alt="discount img" width={310} height={470} />
        </div >}
        </>

    )
}

export default Category

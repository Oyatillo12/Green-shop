'use client'
import React, { useContext, useState } from "react";
import './style.css';
import { Context } from "@/context/FilterContext";
import { useQuery } from "@tanstack/react-query";
import { useAxios } from "@/hooks/useAxios";
import InputSlider from "@/components/Slider/InputSlider";
import Button from "@/helper/components/button/Button";
import SizeProducts from "@/components/SizeProducts";

interface Category {
    category_name: string
    category_id: string
}

const Category = () => {
    const [value, setValue] = useState([25, 777]);

    const axios = useAxios();
    const { data = [] } = useQuery({
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
        <div className="category">
            <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-2">Categories</h2>
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
            <div style={{ marginBottom: "46px" }} className=" ">
                <h2 className="text-[18px] font-bold text-[#3D3D3D] mt-6" >Price Range</h2>
                <div className="pl-4">
                    <InputSlider setValue={setValue} value={value} />
                    <p style={{ marginBottom: "16px" }} className="text-[15px] text-[#3D3D3D]  mt-4">Price: <span className="text-[#46A358] font-bold">${value[0] + "-" + "$" + value[1]}</span></p>
                    <Button title="filter" type="button" extraStyle="w-[80px] hover:opacity-80 duration-300" onClick={handleFilterPrice} />
                </div>
            </div>
            <SizeProducts />
        </div >
    )
}

export default Category
"use client";

import { ProductType } from "@/service/products/Products";
import { createContext, ReactNode, SetStateAction, useEffect, useState } from "react";

interface ProductsPriceType {
    max: number | null,
    min: number | null,
}
interface ContextType {
    categoryId: string,
    setCategoryId: React.Dispatch<SetStateAction<string>>,
    size: string | null,
    setSize: React.Dispatch<SetStateAction<string | null>>, 
    tags: string | undefined,
    setTags: React.Dispatch<SetStateAction<string | undefined>>, 
    minPrice: number | null,
    setMinPrice: React.Dispatch<SetStateAction<number | null>>,
    maxPrice: number | null,
    setMaxPrice: React.Dispatch<SetStateAction<number | null>>,
    prductsPrice: ProductsPriceType,
    setProducstPrice: React.Dispatch<SetStateAction<ProductsPriceType>>,  
    products: ProductType[] | [],
    setProducts: React.Dispatch<SetStateAction<ProductType[] | []>>,  
    accessToken: string | null,
    setAccessToken: React.Dispatch<SetStateAction<string | null>>,  
}


export const Context = createContext<ContextType>({
    categoryId: '',
    setCategoryId: () => "",
    size: "",
    setSize: () => "", 
    tags: "",
    setTags: () => "",
    minPrice: null,
    setMinPrice: () => null,
    maxPrice: null,
    setMaxPrice: () => null,
    prductsPrice: {max: null, min: null},
    setProducstPrice: () => ({max: null, min: null}),
    products: [],
    setProducts: () => [],
    accessToken: null,
    setAccessToken: () => null,
});

export const ContextProvider = ({ children }:{children:ReactNode}) => {
    const [categoryId, setCategoryId] = useState<string>("");
    const [size, setSize] = useState<string | null>("");
    const [tags, setTags] = useState<string | undefined>("");
    const [minPrice,setMinPrice] = useState<number | null>(null);
    const [maxPrice,setMaxPrice] = useState<number | null>(null);
    const [prductsPrice, setProducstPrice] = useState<ProductsPriceType>({max: null, min: null});
    const [products, setProducts] = useState<ProductType[] | []>([]);
    const [accessToken, setAccessToken] = useState<string | null>("");

    const fetchToken = async () => {
        try {
            const token = await Promise.resolve(localStorage.getItem('token')); 
            if (token) {
                setAccessToken(token);
            }
        } catch (error) {
            console.log('Error fetching token:', error);
        }
    };

    useEffect(() => {
        fetchToken();
    }, []);
    return (
        <Context.Provider value={{products, setProducts,prductsPrice,accessToken, setAccessToken, setProducstPrice, maxPrice,setMaxPrice,minPrice,setMinPrice,tags, setTags, categoryId, setCategoryId,size, setSize}}>
            {children}
        </Context.Provider>
    );
}
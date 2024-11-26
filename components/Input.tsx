"use client";

import React from 'react'

type InputType = {
    type: "text" | "email" | "password";
    name:string;
    placeholder:string;
    onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void,
}

const Input:React.FC<InputType> = ({name,placeholder,type,onChange}) => {
  return (
    <input autoComplete='off' className='border-[#A5A5A5] border outline-none text-[14px] rounded-md py-[12px] px-[14px] w-full' onChange={onChange} required type={type} name={name} placeholder={placeholder} />
  )
}

export default Input

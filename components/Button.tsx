"use client"

import React, { ReactNode } from 'react'

type Buttontype = {
  title: string,
  extraStyle: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
  type: "submit" | "button" | "reset",
  rightIcon?: ReactNode,
  leftIcon?: ReactNode,
}

const Button: React.FC<Buttontype> = ({ title, extraStyle, onClick, type, leftIcon, rightIcon }) => {
  return (
    <button type={type} onClick={onClick} className={`py-2 ${extraStyle} bg-[#46A358] text-white font-medium text-[16px] border-[#46A358] border hover:bg-transparent hover:text-[#46A358] duration-300 flex items-center justify-center gap-2 leading-5 rounded-md`}>
      {leftIcon && leftIcon}
      {title}
      {rightIcon && rightIcon}
    </button>
  )
}

export default Button

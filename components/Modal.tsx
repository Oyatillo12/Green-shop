"use client";

import { CloseIcon } from '@/public/images/icon';
import React, { ReactNode, SetStateAction } from 'react';

type ModalType = {
    openModal:boolean;
    setOpenModal:React.Dispatch<SetStateAction<boolean>>;
    extraStyle?:string;
    children:ReactNode
}

const Modal:React.FC<ModalType> = ({openModal, setOpenModal, extraStyle,children}) => {
  return (
    <div onClick={(e) => (e.target as HTMLDivElement).id === "wrapper"  ? setOpenModal(false) : ""} id='wrapper' className={`fixed z-50 inset-0 bg-[#000]/20 backdrop-blur-sm flex items-center justify-center duration-300 ${openModal ? "scale-1" : "scale-0"}`}>
      <div className={`p-4 bg-white shadow-lg relative  ${extraStyle}`}>
        <button onClick={() => setOpenModal(false)} className='absolute right-[14px] top-[17px]'><CloseIcon/></button>
        {children}
      </div>
    </div>
  )
}

export default Modal

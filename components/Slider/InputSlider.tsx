"use client"


import React, { SetStateAction, useContext } from 'react'
// @ts-ignore
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./style.css";
import { Context } from '@/context/FilterContext';

type RangeType = {
    value: number[],
    setValue: React.Dispatch<SetStateAction<number[]>>,
  
}
const InputSlider:React.FC<RangeType> = ({value, setValue}) => {
    const {prductsPrice} = useContext(Context)
  return (
    <RangeSlider min={prductsPrice.min} max={prductsPrice.max} value={value} onInput={setValue} />

  )
}

export default InputSlider

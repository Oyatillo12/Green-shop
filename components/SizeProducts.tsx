import { Context } from '@/context/FilterContext'
import Button from '@/helper/components/button/Button'
import React, { useContext } from 'react'

type SizeType = {
    id: number,
    size: string,
}

const SizeProducts = () => {
    const sizeList: SizeType[] = [
        {
            id: 1,
            size: 'Small',
        },
        {
            id: 2,
            size: 'Medium',
        },
        {
            id: 3,
            size: 'Large',
        },
    ]
    const { size, setSize } = useContext(Context)
    return (
        <div style={{padding:" 0 18px"}} className='mb-4'>
            <div className='flex items-center justify-between'>
                <h2 className='text-[18px] text-[#3D3D3D] font-bold mb-2'>Size</h2>
                {size  &&  <Button type='button' onClick={() => setSize(null)} title={"reset"} extraStyle='w-[80px]' /> }
            </div>
            <ul className='space-y-5 pl-4'>
                {sizeList.map((item: SizeType) => (
                    <li onClick={() => setSize(item.size)} key={item.id} className={`text-[15px] ${size == item.size ? "text-[#46A358]" : "text-[#3D3D3D]"} cursor-pointer`}>
                        {item.size}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SizeProducts

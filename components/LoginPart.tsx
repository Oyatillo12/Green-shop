import React from 'react'
import Input from './Input'

const LoginPart = () => {
    return (
        <>
            <p className='text-[#3D3D3D] text-[13px]'>Enter your username and password to login.</p>
            <Input type='email' name='email' placeholder='almamun_uxui@outlook.com' />
            <Input type='password' name='password' placeholder='***********' />
            <p className='text-[#46A358] cursor-pointer text-end text-[14px]'>Forgot Password?</p>
        </>
    )
}

export default LoginPart

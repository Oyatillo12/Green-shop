"use client"

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import Button from './Button';
import { LogIcon } from '@/public/images/icon';
import Modal from './Modal';
import { usePathname } from 'next/navigation';
import RegisterPart from './RegisterPart';
import { useAxios } from '@/hooks/useAxios';
import VerifyPart from './VerifyPart';
import LoginPart from './LoginPart';

type NavListType = { id: number; title: string; href: string, isActive: boolean }
type AuthType = { email: string, password: string, firstName?: string, lastName?: string }

const Header = () => {
    const pathname = usePathname();
    const [saveEmail, setSaveEmail] = useState<string>("")
    const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
    const [verifyValue, setVerifyValue] = useState<string>("")
    const [selectedAuth, setSelectedAuth] = useState<"login" | "register" | "verify">('login')
    const navList: NavListType[] = [
        {
            id: 1,
            title: "Home",
            href: "/",
            isActive: pathname == "/"
        },
        {
            id: 2,
            title: "Shop",
            href: "/shop",
            isActive: pathname == "/shop"
        },
        {
            id: 3,
            title: "Plant Care",
            href: "/plant-care",
            isActive: pathname == "/plant-care"
        },
        {
            id: 4,
            title: "Blogs",
            href: "/blogs",
            isActive: pathname == "/blogs"
        }
    ]
    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selectedAuth === "register") {
            const data: AuthType = {
                email: (e.target as HTMLFormElement).email.value,
                password: (e.target as HTMLFormElement).password.value,
                firstName: (e.target as HTMLFormElement).username.value,
                lastName: (e.target as HTMLFormElement).username.value
            }
            useAxios().post('/register', data).then(res => {
                setSaveEmail(data.email)
                setSelectedAuth('verify')
            });
        }
        else if (selectedAuth === "verify") {
            useAxios().post('/users/verify', {}, {
                params: { email: saveEmail, code: verifyValue }
            }).then(res => console.log(res));
        }
        else {
            const data = {usernameoremail:(e.target as HTMLFormElement).email.value, password:(e.target as HTMLFormElement).password.value}
            useAxios().post('/users/verify', data).then(res => console.log(res));
        }
    }

    return (
        <>
            <header className='flex items-center border-b-[1px] border-gray-200 py-5 w-[1200px] mx-auto justify-between'>
                <Image priority style={{ width: "150px", height: "34px" }} alt='logo img' src={'./logo.svg'} width={150} height={34} />
                <nav className='flex items-center justify-center gap-[50px]'>
                    {navList.map((item: NavListType) => (
                        <Link className={`text-[16px] relative leading-5 text-[#3D3D3D] before:h-[3px] before:absolute before:w-full before:bg-[#46A358] before:bottom-[-30px] before:duration-500 duration-200 ${item.isActive ? "before:scale-1 font-bold" : "before:scale-0"} `} key={item.id} href={item.href}>{item.title}</Link>
                    ))}
                </nav>
                <div className='flex items-center justify-center gap-[30px]'>
                    <Image priority style={{ width: "20px", height: "20px" }} alt='Search img' src={'search-img.svg'} width={20} height={20} />
                    <Image priority style={{ width: "29px", height: "24px" }} alt='Cart img' src={'cart.svg'} width={29} height={24} />
                    <Button leftIcon={<LogIcon />} extraStyle='w-[100px]' onClick={() => setOpenLoginModal(true)} title={"login"} type='button' />
                </div>
            </header>
            <Modal openModal={openLoginModal} setOpenModal={setOpenLoginModal} extraStyle='w-[500px]'>
                <ul className='flex cursor-pointer items-center gap-[27px] justify-center mb-[40px] pt-[50px]'>
                    <li onClick={() => setSelectedAuth("login")} className={`${selectedAuth == 'login' ? "text-[#46A358]" : "text-[#3D3D3D]"}  text-[16px] font-medium relative hover:opacity-70 duration-200 leading-5 after:w-[1px] after:h-4 after:bg-[#3D3D3D] after:absolute after:right-[-12px] after:bottom-0 `}>Login</li>
                    <li onClick={() => setSelectedAuth("register")} className={`${selectedAuth == 'register' ? "text-[#46A358]" : "text-[#3D3D3D]"} text-[16px] leading-5 hover:opacity-70 duration-200 font-medium`}>Register</li>
                </ul>
                <form onSubmit={handleSubmit} className='w-[300px] mx-auto space-y-5'>
                    {selectedAuth == "login" && <LoginPart />}
                    {selectedAuth == "register" && <RegisterPart />}
                    {selectedAuth == "verify" && <VerifyPart setValue={setVerifyValue} />}
                    <Button type='submit' onClick={() => { }} extraStyle='w-[300px] !py-[15px]' title={selectedAuth == "register" ? "Register" : selectedAuth === "verify" ? "Verify" : "Login"} />
                </form>
            </Modal>
        </>
    )
}

export default Header

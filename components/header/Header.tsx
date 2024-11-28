"use client"

import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Button from '../../helper/components/button/Button';
import { LogIcon } from '@/public/images/icon';
import Modal from '../../helper/components/modal/Modal';
import { usePathname, useRouter } from 'next/navigation';
import RegisterPart from '../auth/RegisterPart';
import { useAxios } from '@/hooks/useAxios';
import VerifyPart from '../auth/VerifyPart';
import LoginPart from '../auth/LoginPart';
import Menubtn from '../MenuBtn/Menubtn';
import './style.css';
import ResetPasword from '../auth/ResetPasword';
import NewPasswordPart from '../auth/NewPasswordPart';

type NavListType = { id: number; title: string; href: string, isActive: boolean };
export type AuthType = { email?: string, password?: string, firstName?: string, lastName?: string };

const Header = () => {
    const fetching = useAxios();
    const pathname = usePathname();
    const router = useRouter();
    const [saveEmail, setSaveEmail] = useState<string | undefined>("")
    const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
    const [verifyValue, setVerifyValue] = useState<string>("");
    const [selectedAuth, setSelectedAuth] = useState<"login" | "register" | "verify" | "resetPassword" | "newPassword">('login');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const [isToken, setIsToken] = useState(null);

    const fetchToken = async () => {
        try {
            const token = await Promise.resolve(localStorage.getItem('token')); // Simulate async
            if (token) {
                setIsToken(JSON.parse(token));
            }
        } catch (error) {
            console.error('Error fetching token:', error);
        }
    };

    useEffect(() => {
        fetchToken();
    }, []);

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
    ];

    function handleSubmit(e: React.MouseEvent<HTMLFormElement>) {
        e.preventDefault();
        if (selectedAuth === "register") {
            const data: AuthType = {
                email: (e.target as HTMLFormElement).email.value,
                password: (e.target as HTMLFormElement).password.value,
                firstName: (e.target as HTMLFormElement).username.value,
                lastName: (e.target as HTMLFormElement).username.value
            }
            setIsLoading(true);
            fetching.post('/register', data).then(() => {
                setSaveEmail(data.email)
                setSelectedAuth('verify')
                setIsLoading(false);
            }).catch(err => {
                setIsLoading(false);
                console.log(err.message);
            });
        }
        else if (selectedAuth === "verify") {
            setIsLoading(true);
            fetching.post('/users/verify', {}, {
                params: { email: saveEmail, code: verifyValue }
            }).then(() => {
                setSelectedAuth("login")
                setIsLoading(false);
            }).catch(err => {
                setIsLoading(false);
                console.log(err.message);
            });
        }
        else if (selectedAuth === "resetPassword") {
            setIsLoading(true);
            fetching.post(`forgot/${(e.target as HTMLFormElement).email.value}`, {}).then(() => {
                setSelectedAuth('newPassword');
                setSaveEmail((e.target as HTMLFormElement).email.value)
                setIsLoading(false);
            }).catch(err => {
                setIsLoading(false);
                console.log(err.message);
            });
        }
        else if (selectedAuth === "newPassword") {
            setIsLoading(true);
            const data = { email: saveEmail, new_password: (e.target as HTMLFormElement).password.value, otp: verifyValue }
            fetching.put(`/reset-password`, data).then(() => {
                setSelectedAuth('login');
                setIsLoading(false);
            }).catch(err => {
                setIsLoading(false);
                console.log(err.message);
            });
        }
        else {
            setIsLoading(true);
            const data = { usernameoremail: (e.target as HTMLFormElement).email.value, password: (e.target as HTMLFormElement).password.value }
            fetching.post('/login', data).then(res => {
                setOpenLoginModal(false);
                setIsLoading(false);
                setIsToken(res.data);
                localStorage.setItem('token', JSON.stringify(res.data));
            }).catch(err => {
                setIsLoading(false);
                console.log(err.message);
            });
        }
    }

    return (
        <>
            <header className='flex items-center border-b-[1px] px-5 border-gray-200 py-5 max-w-[1200px] w-full mx-auto justify-between'>
                <div className='flex items-center space-x-4'>
                    <Menubtn extraStyle='' />
                    <Image className='max-sm:hidden' priority style={{ width: "150px", height: "34px" }} alt='logo img' src={'./logo.svg'} width={150} height={34} />
                </div>
                <nav className='flex items-center justify-center max-md:hidden gap-[40px] lg:gap-[50px]'>
                    {navList.map((item: NavListType) => (
                        <Link className={`text-[16px] relative leading-5 text-[#3D3D3D] before:h-[3px] before:absolute before:w-full before:bg-[#46A358] before:bottom-[-30px] before:duration-500 duration-200 ${item.isActive ? "before:scale-1 font-bold" : "before:scale-0"} `} key={item.id} href={item.href}>{item.title}</Link>
                    ))}
                </nav>
                <div className='flex items-center justify-center gap-[23px] lg:gap-[30px]'>
                    <Image priority style={{ width: "20px", height: "20px" }} alt='Search img' src={'/search-img.svg'} width={20} height={20} />
                    <Image priority style={{ width: "29px", height: "24px" }} alt='Cart img' src={'/cart.svg'} width={29} height={24} />
                    {isToken ? <button onClick={() => router.push('/profile')}><Image className='cursor-pointer'  priority style={{ width: "20px", height: "20px" }} alt='user icon img' src={'/user.jpg'} width={20} height={20} /></button> : <Button leftIcon={<LogIcon />} extraStyle='w-[100px]' onClick={() => setOpenLoginModal(true)} title={'login'} type='button' />}
                </div>
            </header>
            <Modal openModal={openLoginModal} setOpenModal={setOpenLoginModal} extraStyle='w-[500px]'>
                <ul className='flex cursor-pointer items-center gap-[27px] justify-center mb-[40px] pt-[50px]'>
                    {selectedAuth == "verify" ? <li className={`text-[#46A358] text-[16px] leading-5 hover:opacity-70 duration-200 font-medium`}>Verify</li> : <><li onClick={() => setSelectedAuth("login")} className={`${selectedAuth == 'login' ? "text-[#46A358]" : "text-[#3D3D3D]"}  text-[16px] font-medium relative hover:opacity-70 duration-200 leading-5 after:w-[1px] after:h-4 after:bg-[#3D3D3D] after:absolute after:right-[-12px] after:bottom-0 `}>Login</li>
                        <li onClick={() => setSelectedAuth("register")} className={`${selectedAuth == 'register' ? "text-[#46A358]" : "text-[#3D3D3D]"} text-[16px] leading-5 hover:opacity-70 duration-200 font-medium`}>Register</li></>}
                </ul>
                <form onSubmit={handleSubmit} className='w-[300px] mx-auto space-y-5'>
                    {selectedAuth == "login" && <LoginPart onReset={() => setSelectedAuth("resetPassword")} />}
                    {selectedAuth == "register" && <RegisterPart />}
                    {selectedAuth == "verify" && <VerifyPart setValue={setVerifyValue} />}
                    {selectedAuth == "resetPassword" && <ResetPasword />}
                    {selectedAuth == "newPassword" && <NewPasswordPart setValue={setVerifyValue} />}
                    <Button type='submit' onClick={() => { }} extraStyle='w-[300px] !py-[15px]' title={isLoading ? <span className="loader"></span> : selectedAuth === "register" ? "Register" : selectedAuth === "verify" ? "Verify" : selectedAuth === "resetPassword" ? "Send Code" : selectedAuth === "newPassword" ? "Reset Password" : "Login"} />
                </form>
            </Modal>
        </>
    )
}

export default Header

'use client'
import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { PiFinnTheHuman } from "react-icons/pi";
import { CiSettings, CiLogout } from "react-icons/ci";
import { MdOutlineTravelExplore } from "react-icons/md";



import { useState } from 'react'

export default function Navbar() {

    // TODO -> ADD Pages link in both, add image of the Person logged in + also add signout profile options on click
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const setMenu = () => {
        setMenuOpen(!menuOpen)
    }
    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }
    const handleProfile = () => {
        setProfileOpen(!profileOpen)
    }

    return (
        <nav className='sticky top-0 w-full shadow-xl h-24 bg-white'>
            {/* Normal NavBar */}
            <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
                <Link href={"/"}>
                    <div className='pl-2'>
                        {/* <MdOutlineTravelExplore size={30} color='#ADD8E6' /> */}
                        <img src='ExploroTrans.png' height="40" width="40"></img>
                    </div>
                </Link>
                <div className='hidden lg:flex'>
                    <ul className='hidden lg:flex'>
                        <Link href={'/pipeline'}>
                            <li className='ml-6 uppercase hover:bg-slate-200 p-2 rounded-md text-sm'>
                                Pipeline
                            </li>
                        </Link>
                        <Link href={'/studies'}>
                            <li className='ml-6 uppercase hover:bg-slate-200 p-2 rounded-md text-sm'>
                                Studies
                            </li>
                        </Link>
                        <Link href={'/'}>
                            <li className='ml-6 uppercase hover:bg-slate-200 p-2 rounded-md text-sm'>
                                Schedule
                            </li>
                        </Link>
                        <Link href={'/participants'}>
                            <li className='ml-6 uppercase hover:bg-slate-200 p-2 rounded-md text-sm'>
                                Participants
                            </li>
                        </Link>
                        <Link href={'/'}>
                            <li className='ml-6 uppercase hover:bg-slate-200 p-2 rounded-md text-sm'>
                                Dashboard
                            </li>
                        </Link>
                        {/* <Link href={'/'}>
                            <li className='ml-6 uppercase hover:bg-slate-200 p-2 rounded-md text-sm'>
                                Messages
                            </li>
                        </Link>
                        <Link href={'/'}>
                            <li className='ml-6 uppercase hover:bg-slate-200 p-2 rounded-md text-sm'>
                                Chat
                            </li>
                        </Link>
                        <Link href={'/'}>
                            <li className='ml-6 uppercase hover:bg-slate-200 p-2 rounded-md text-sm'>
                                Multi-step Form
                            </li>
                        </Link> */}
                    </ul>
                </div>

                {/* TODO ->  Profile Picture of the human */}
                <div onClick={handleProfile} className='hidden lg:flex cursor-pointer pr-5'>
                    <PiFinnTheHuman size={30} />
                </div>
                <div className={profileOpen
                    ? ' fixed top-8 right-6 mt-10 h-min w-44 bg-slate-100 rounded-md hover:h-max ease-in-out duration-700'
                    : 'hidden'}>
                    <ul className='p-5 '>
                        <li className='hover:text-green-500 mb-4 pl-1 cursor-pointer text-base whitespace-nowrap text-ellipsis overflow-hidden ' >
                            Vedant Maurya
                        </li>
                        <Link href={'/dashboard'} >
                            <li onClick={() => setProfileOpen(false)} className='hover:text-blue-500 mb-4 cursor-pointer text-sm'>
                                <div className=' flex items-center'>
                                    <CiSettings size={25} />
                                    Settings
                                </div>
                            </li>
                        </Link>
                        <Link href={'/dashboard'}>
                            <li onClick={() => setProfileOpen(false)} className='hover:text-red-500 mb-2 cursor-pointer text-sm '>
                                <div className='flex items-center'>
                                    <CiLogout size={25} />
                                    LogOut
                                </div>
                            </li>
                        </Link>

                    </ul>
                </div>

                {/* For smaller screens media query */}

                <div onClick={setMenu} className='lg:hidden cursor-pointer  pl-24'>
                    <AiOutlineMenu className=' hover:bg-slate-200 p-1 rounded-md' size={30} />
                </div>

                <div className={menuOpen
                    ? 'fixed right-0 top-0 sm:w-[35%] w-[55%]  lg:hidden bg-slate-100 h-screen p-10 ease-in duration-500'
                    : 'fixed right-[-100%] top-0 sm:w-[35%] w-[55%] h-screen  p-10 ease-in duration-500'}>

                    <div className='flex w-full items-center justify-end'>
                        <div onClick={handleNav} className='absolute  top-8 right-6 cursor-pointer'>
                            <AiOutlineClose className='hover:bg-slate-300 p-1 rounded-md' size={30} />
                        </div>
                    </div>

                    <div className='flex-col mt-4 py-4'>
                        <ul>
                            <Link href={'/pipeline'}>
                                <li onClick={() => setMenuOpen(false)} className='py-4 hover:text-slate-500 hover:border-b-2 cursor-pointer'>
                                    Pipeline
                                </li>
                            </Link>
                            <Link href={'/studies'}>
                                <li onClick={() => setMenuOpen(false)} className='py-4 hover:text-slate-500 hover:border-b-2  cursor-pointer'>
                                    Studies
                                </li>
                            </Link>
                            <Link href={'/'}>
                                <li onClick={() => setMenuOpen(false)} className='py-4 hover:text-slate-500 hover:border-b-2  cursor-pointer'>
                                    Schedule
                                </li>
                            </Link>
                            <Link href={'/participants'}>
                                <li onClick={() => setMenuOpen(false)} className='py-4 hover:text-slate-500 hover:border-b-2  cursor-pointer'>
                                    Participants
                                </li>
                            </Link>
                            <Link href={'/'}>
                                <li onClick={() => setMenuOpen(false)} className='py-4 hover:text-slate-500 hover:border-b-2  cursor-pointer'>
                                    Dashboard
                                </li>
                            </Link>
                            {/* <Link href={'/'}>
                                <li onClick={() => setMenuOpen(false)} className='py-4 hover:text-slate-500 hover:border-b-2  cursor-pointer'>
                                    Message
                                </li>
                            </Link>
                            <Link href={'/'}>
                                <li onClick={() => setMenuOpen(false)} className='py-4 hover:text-slate-500 hover:border-b-2  cursor-pointer'>
                                    Chat
                                </li>
                            </Link>
                            <Link href={'/'}>
                                <li onClick={() => setMenuOpen(false)} className='py-4 hover:text-slate-500 hover:border-b-2  cursor-pointer'>
                                    Multi-step Form
                                </li>
                            </Link> */}
                        </ul>
                        <ul className=' absolute bottom-0 right-[10%] sm:right-[15%] md:right-[30%]  p-5 flex-col'>
                            <div className='flex items-center mb-4'>
                                <PiFinnTheHuman size={30} />
                                <li className='hover:text-green-500 pl-2 cursor-pointer text-base whitespace-nowrap text-ellipsis overflow-hidden ' >
                                    Vedant Maurya
                                </li>
                            </div>
                            <Link href={'/dashboard'} >
                                <li onClick={() => setProfileOpen(false)} className='hover:text-blue-500 mb-4 cursor-pointer text-base'>
                                    <div className=' flex items-center'>
                                        <CiSettings size={25} />
                                        Settings
                                    </div>
                                </li>
                            </Link>
                            <Link href={'/dashboard'}>
                                <li onClick={() => setProfileOpen(false)} className='hover:text-red-500 mb-2 cursor-pointer text-base '>
                                    <div className='flex items-center'>
                                        <CiLogout size={25} />
                                        LogOut
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        
    )
}



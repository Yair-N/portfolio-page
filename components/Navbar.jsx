import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { MdLightMode, MdDarkMode } from 'react-icons/md'

import { navLinks } from '@/constants';
import styles, { layout } from '@/styles/style';
import NavLogo from '../public/assets/YNFS 600.png'

const Navbar = ({ theme, setShowResume, setDark }) => {

    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [linkColor, setLinkColor] = useState('#1f2937');

    const router = useRouter();

    const handleNav = () => {
        setNav((prev) => !prev);
    };

    const handleTheme = () => {
        setDark((prev) => !prev)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    const resume = (e) => {
        setShowResume(true)
    }


    return (
        <div

            className={`fixed top-0 w-full h-20 text-gray-600 bg-[#ecf0f3] dark:bg-gray-900 dark:text-gray-300  ${shadow ? 'shadow-md shadow-gray-400 z-[100] ease-in-out duration-300' : ' z-[100] '}`}
        >
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/'>
                    <Image
                        src={NavLogo}
                        alt='/'
                        width='125'
                        height='50'
                        className='cursor-pointer'
                    />
                </Link>
                <div className='h-full flex'>
                    <div
                        onClick={handleTheme}
                        className='navbarLink'
                    >
                        {theme ? <MdLightMode size={25} /> : <MdDarkMode size={25} />}
                    </div>
                    <ul className={`hidden md:flex`}>
                        {navLinks.map((link) => (
                            <li key={`nav_link_${link.label}`} className={`navbarLink`}>
                                <Link href={link.url} scroll={false}>{link.label}</Link>
                            </li>
                        ))}
                        <li className={`navbarLink`}>
                            <Link href='/' onClick={() => resume()}>Resume</Link>
                        </li>
                    </ul>
                    {/* Hamburger Icon */}
                    <div
                        onClick={handleNav}
                        className='md:hidden navbarLink'
                    >
                        <AiOutlineMenu size={25} />
                    </div>

                </div>
            </div>

            {/* Mobile Menu */}
            {/* Overlay */}
            <div
                className={
                    nav ? 'md:hidden fixed left-0 top-0 w-full h-screen backdrop-blur-lg ' : ''
                }
            >
                {/* Side Drawer Menu */}
                <div
                    className={
                        nav
                            ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  text-gray-600 bg-[#ecf0f3] dark:bg-gray-900 dark:text-gray-300  p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }
                >
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href='/'>
                                <Image
                                    src={NavLogo}
                                    width='87'
                                    height='35'
                                    alt='/'
                                />
                            </Link>

                            <div
                                onClick={handleNav}
                                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                            >
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>
                                Let&#39;s build something legendary together
                            </p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            {navLinks.map((link) => <Link key={`sidebar_${link.label}`} href={link.url}>
                                <li onClick={() => setNav(false)} className={`${layout.sidebar}`}>
                                    {link.label}
                                </li>
                            </Link>)}
                            <Link href='/'>
                                <li onClick={() => { setNav(false); resume(); }} className={`${layout.sidebar}`}>
                                    Resume
                                </li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>
                                Let&#39;s Connect
                            </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <a
                                    href='https://www.linkedin.com/in/yair-notkovich/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a
                                    href='https://github.com/Yair-n'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaGithub />
                                    </div>
                                </a>
                                <Link href='/#contact'>
                                    <div
                                        onClick={(prev) => setNav(!prev)}
                                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                                    >
                                        <AiOutlineMail />
                                    </div>
                                </Link>
                                <Link href='/'>
                                    <div
                                        onClick={(prev) => setNav(!prev)}
                                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                                    >
                                        <BsFillPersonLinesFill />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
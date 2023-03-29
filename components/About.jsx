import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import { about } from '@/constants'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen h-full p-2 flex items-center pb-40'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
                        About me
                    </p>
                    <p className='py-2 text-gray-600'>
                        {about.me_1}

                    </p>
                    <p className='py-2 text-gray-600'>
                        {about.me_2}
                    </p>
                    {/* <Link href='/#projects'>
                        <p className='py-2 text-gray-600 underline cursor-pointer'>
                            Check out some of my latest projects.
                        </p>
                    </Link> */}
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src={AboutImg} className='rounded-xl' alt='/' />
                </div>
            </div>
        </div>
    );
};

export default About;
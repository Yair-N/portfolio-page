import React from 'react'
import { about } from '../constants'


const Hero = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className="max-w-7xl mx-auto w-full h-full p-2 flex justify-center items-center">

                <div>
                    <p className='uppercase tracking-widest text-sm text-gray-600'>
                        Let's get it up and running
                    </p>
                    <h1 className='py-4 text-gray-700'>
                        Hi, I'm <span className='text-[#7b79c0]'>Yair</span>
                    </h1>
                    <h1 className='py-4 text-gray-700'>
                        I'm a<span className='text-[#7b79c0]'> Full-Stack</span> web developer
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto md:text-[1.3rem] text-[1.5rem] sm:text-center text-left'>
                        {about.hero}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
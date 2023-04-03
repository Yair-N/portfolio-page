import React from 'react'
import { about } from '../constants'


const Hero = (props) => {
    return (
        <div id='hero' className='md:mt-0 mt-6  w-full h-screen text-center'>
            <div className="max-w-7xl mx-auto w-full h-full p-2 flex justify-center items-center">

                <div>
                    <p className={`uppercase tracking-widest text-sm text-gray-600 ${props?.dark && `text-gray-300`}`}>
                        Let&apos;s get it up and running
                    </p>
                    <h1 className={`py-4 ${props.theme ? `text-dark` : `text-gray-700`}`}>
                        Hi, I&apos;m <span className='color-main'>Yair</span>
                    </h1>
                    <h1 className={`py-4 ${props.theme ? `text-dark` : `text-gray-700`}`}>
                        I&apos;m a<span className='color-main'> Full-Stack</span> web developer
                    </h1>
                    <p className={`py-4 ${props.theme ? `text-gray-300` : `text-gray-600`} max-w-[70%] m-auto md:text-[1.3rem] text-[1.5rem] sm:text-center text-left`}>
                        {about.hero}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
import Image from 'next/image'
// import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const ProjectItem = ({ project }) => {


    const { title, backgroundImg, tech, description, projectUrl } = project


    console.log(description)
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5]/30 to-[#709dff]/30'>
            <Image className='rounded-xl group-hover:opacity-10 h-auto max-h-[470px]' src={backgroundImg} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
                <p >
                    <span className='text-white text-md text-left'>{description}</span>
                    {projectUrl && <span>  <br /> <a href={projectUrl} target='blank' className='text-[#8d62f3] text-md  decoration-inherit no-underline'>
                        Open {title}
                    </a></span>}
                </p>

            </div>
        </div>
    )
}

export default ProjectItem
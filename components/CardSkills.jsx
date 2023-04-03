import React, { useEffect, useState } from 'react';
import Image from 'next/image';


const CardSkill = ({ skill }) => {

    const [path, setPath] = useState('../public/assets/skills')
    useEffect(() => {
        if (!window === 'undefined')
            setPath(`${window.location.protocol}//${window.location.host}//assets//skills/`)
    }, [])
    // console.log(skill_path)
    return (
        <div className='p-6 shadow-xl  shadow-gray-400  sm:rounded-xl rounded-full hover:scale-105 ease-in duration-300'>
            <div className='sm:h-[120px] sm:grid grid-cols-2 flex flex-col gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={`/${path}/${skill.image}.png`} alt={skill.name} width={86} height={86} />
                </div>
                <div className='m-auto sm:flex hidden'>
                    <h4>{skill.name}</h4>
                </div>
            </div>
        </div>
    )
}

export default CardSkill
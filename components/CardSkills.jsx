import React from 'react'
import Image from 'next/image';

const CardSkill = ({ skill }) => {

    const { icon, name } = skill

    return (
        <div className='p-6 shadow-xl sm:rounded-xl rounded-full hover:scale-105 ease-in duration-300'>
            <div className='h-full sm:h-[120px] sm:grid grid-cols-2 flex flex-col gap-4 justify-center items-center'>
                <div className='m-auto flex flex-1'>
                    <Image src={icon} width='64px' height='64px' alt={name} />
                </div>
                <div className='m-auto sm:flex hidden'>
                    <h4>{name}</h4>
                </div>
            </div>
        </div>
    )
}

export default CardSkill
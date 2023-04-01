import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { skills } from '@/constants';
import CardSkill from './CardSkills';

const SectionSkills = () => {

    const [path, setPath] = useState('../public/assets/skills')
    useEffect(() => {
        if (!window === 'undefined')
            setPath(`${window.location.protocol}//${window.location.host}//assets//skills/`)
    }, [])



    return (
        <div id='skills' className='  w-full h-screen  p-2'>
            <div className='max-w-[1240px] mx-auto md:mt-0 mt-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5] py-4'>
                    Tech Stack & Skills
                </p>
                <div className='grid grid-cols-3 lg:grid-cols-4 gap-8'>
                    {skills.map((skill) => <CardSkill key={skill.name} skill={skill} />)}
                </div>
            </div>
        </div>
    );
};

export default SectionSkills;
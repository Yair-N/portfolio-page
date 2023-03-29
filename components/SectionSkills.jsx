import React from 'react';

import { skills } from '@/constants';
import CardSkill from './CardSkills';

const SectionSkills = () => {
    return (
        <div id='skills' className='w-full sm:h-screen  p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
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

import React from 'react';
import ProjectItem from './ProjectItem';

import { projects } from '@/constants';

const Projects = () => {
    return (
        <div id='projects' className='w-full h-full '>
            <div className='max-w-[1240px] m-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase color-main md:mt-10 mt-6'>
                    Projects
                </p>
                <h2 className='py-4'>What I&apos;ve Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {projects.map((project) => <ProjectItem
                        key={`project_${project.title}`}
                        project={project}
                    // priority={true}
                    />)}

                </div>
            </div>
        </div>
    );
};

export default Projects;
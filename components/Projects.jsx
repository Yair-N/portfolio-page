
import React from 'react';
import workinprog from '../public/assets/projects/workinprogress.jpg'
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

import { projects } from '@/constants';

const Projects = () => {
    return (
        <div id='projects' className='w-full h-screen '>
            <div className='max-w-[1240px] m-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase color-main '>
                    Projects
                </p>
                <h2 className='py-4'>What I&apos;ve Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {projects.map((project) => <ProjectItem
                        title={project.title}
                        backgroundImg={project.backgroundImg}
                        projectUrl={project.projectUrl}
                        tech={project.tech}
                    // priority={true}
                    />)}

                </div>
            </div>
        </div>
    );
};

export default Projects;
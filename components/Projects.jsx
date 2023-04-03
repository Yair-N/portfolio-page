
import React from 'react';
import workinprog from '../public/assets/projects/workinprogress.jpg'
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
    return (
        <div id='projects' className='w-full h-screen '>
            <div className='max-w-[1240px] m-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase color-main '>
                    Projects
                </p>
                <h2 className='py-4'>What I&apos;ve Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title='work in progress'
                        backgroundImg={workinprog}
                        projectUrl='/'
                        tech='React JS'
                        priority={true}
                    />
                  
                </div>
            </div>
        </div>
    );
};

export default Projects;
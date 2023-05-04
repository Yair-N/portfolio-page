import react from '../public/assets/skills/react.png'
import redux from '../public/assets/skills/redux.png'
import node from '../public/assets/skills/node.png'
import django from '../public/assets/skills/django.png'
import flask from '../public/assets/skills/flask.png'
import javascript from '../public/assets/skills/javascript.png'
import html from '../public/assets/skills/html.png'
import bootstrap from '../public/assets/skills/bootstrap.png'
import css from '../public/assets/skills/css.png'
import tailwind from '../public/assets/skills/tailwind.png'
import material_ui from '../public/assets/skills/material_ui.png'
import typescript from '../public/assets/skills/ts-logo-128.png'


import workinprog from '../public/assets/projects/workinprogress.jpg'
import portfolio from '../public/assets/projects/portfolio.png'
import library from '../public/assets/projects/library.png'
import escgif from '../public/assets/projects/escgif.gif'
import spacex from '../public/assets/projects/spacexui.png'


export const about = {
    hero: `With a passion for turning ideas in to responsive, full-fledged
    web applications using latest technologies.`,

    me_1: `I specialize in building responsive applications
    with React.js at the front-end and Node.js or Django at the backend,
    connecting with databases and other APIs.
    I'm constantly seeking new challenges and opportunities to grow,
    and continue to learn and expand my skills.`,

    me_2: `As a former Operations Manager with almost a decade of experience,
    I faced a wide variety of challenges while planning, organizing and 
    overseeing the supply chain of high quality components for the aerospace industry.
    from raw material, engineering, manufacturing, subcontractors and QA,
    to on-time delivery, I was responsible for managing several teams and ensuring 
    that all operations ran smoothly to produce timely delivery of high-quality results.
    I believe this experience has made me a well rounded person with a BIG passion for 
    problem solving.`,
}


export const skills = [
    {
        image: react,
        name: "React.js"
    },
    {
        image: redux,
        name: "Redux.js"
    },
    {
        image: node,
        name: "Node.js"
    },
    {
        image: django,
        name: "Django"
    },
    {
        image: javascript,
        name: "JavaScript"
    },
    {
        image: typescript,
        name: "TypeScript"
    },
    {
        image: flask,
        name: "Flask"
    },

    {
        image: html,
        name: "HTML"
    },
    {
        image: css,
        name: "CSS"
    },
    {
        image: bootstrap,
        name: "Bootstrap"
    },
    {
        image: tailwind,
        name: "Tailwind"
    },
    {
        image: material_ui,
        name: "Material UI"
    },


]

export const navLinks = [
    {
        url: '/#hero',
        label: "Home"
    },
    {
        url: '/#about',
        label: "About"
    },
    {
        url: '/#skills',
        label: "Skills"
    },
    {
        url: '/#projects',
        label: "Projects"
    },

    {
        url: '/#contact',
        label: "Contact"
    },
]



export const projects = [


    {
        title: 'Graduation project',
        backgroundImg: escgif,
        projectUrl: 'https://github.com/Yair-N/Graduation-project',
        tech: 'React, Django, Redux, sql',
        description: 'A Single page app for flight tickets inspiration and search',

    },
    {
        title: 'Mid-term project',
        backgroundImg: library,
        projectUrl: 'https://yairnotko.pythonanywhere.com/',
        tech: 'Flask',
        description: 'A Flask application simulating a digital library, fetches the best sellers list from `The New york Times` Api, Styled with Bootstrap',

    },
    {
        title: 'SpaceX Ui',
        backgroundImg: spacex,
        projectUrl: 'https://github.com/Yair-N/another-lesson-learned/tree/master/node/SpaceX-Project',
        tech: 'Express, Mongo, React, Node.js,AWS, Ducker',
        description: `The app was briefly deployed on a AWS EC2 instance. a web app that displays SpaceX’s 
        historical and future launches providing summarized 
        info on each launch. The data is sourced from r/SpaceX API using restful api
        `,

    },
    {
        title: 'Pulse systems',
        backgroundImg: workinprog,
        projectUrl: false,
        tech: 'MERN',
        description: "e-commerce app under construction 'Pulse systems'  is a business that provides  smart home, home theater and audiophile solutions including consulting and planning services as well as Top-tier products available for purchase online",

    },
    {
        title: 'Portfolio',
        backgroundImg: portfolio,
        projectUrl: false,
        tech: 'React JS',
        description: 'My portfolio page is a Next.js app styled with tailwind and hosted on vercel',
    },
]
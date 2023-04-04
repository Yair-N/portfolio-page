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


import workinprog from '../public/assets/projects/workinprogress.jpg'
import portfolio from '../public/assets/projects/portfolio.png'

export const about = {
    hero: `With a passion for turning ideas in to a responsive, full-fledged
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
        image: flask,
        name: "Flask"
    },
    {
        image: javascript,
        name: "JavaScript"
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
        title: 'work in progress',
        backgroundImg: workinprog,
        projectUrl: '/',
        tech: 'React JS',
    },

    {
        title: 'Portfolio',
        backgroundImg: portfolio,
        projectUrl: '/',
        tech: 'React JS',
    },
]
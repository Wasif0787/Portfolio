"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectData = [
    {
        id: 1,
        title: "ImageFusion.ai",
        desc: "Technology : Next.js",
        image: "/images/Projects/FullStack/imagefusion.png", // Make sure the correct image path is used
        tag: ["All", "FullStack"],
        gitUrl: "https://github.com/Wasif0787/Clloudinary-SAAS",
        siteUrl: "https://imageaifusion.vercel.app/"
    },
    {
        id: 2,
        title: "Threads Clone",
        desc: "Technology : MERN",
        image: "/images/Projects/FullStack/threads.png",
        tag: ["All", "FullStack"],
        gitUrl: "https://github.com/Wasif0787/Threads-Clone",
        siteUrl: "https://threads-wasif.netlify.app/"
    },
    {
        id: 3,
        title: "Blog Page",
        desc: "Technology : HTML,CSS,JS,EJS,NodeJS,MongoDB",
        image: "/images/Projects/FullStack/blog.png",
        tag: ["All", "FullStack"],
        gitUrl: "https://github.com/Wasif0787/blog-v3",
        siteUrl: "https://blog-v3-68i7.onrender.com/"
    },
    {
        id: 4,
        title: "Secrets Keeper",
        desc: "Technology : HTML,CSS,JS,EJS,NodeJS,MongoDB with User Authentication",
        image: "/images/Projects/FullStack/secrets.png",
        tag: ["All", "FullStack"],
        gitUrl: "https://github.com/Wasif0787/SecretsFinder",
        siteUrl: "https://secret-message-4uap.onrender.com/"
    },
    {
        id: 5,
        title: "Student Management System",
        desc: "Technology : HTML,CSS,PHP,MySQL",
        image: "/images/Projects/FullStack/sms.png",
        tag: ["All", "FullStack"],
        gitUrl: "https://github.com/Wasif0787/School-Management-System",
        siteUrl: "https://student-management-system-wasif.000webhostapp.com/"
    },
    {
        id: 6,
        title: "Covid Tracker",
        desc: "Technology : React.js, Typescript",
        image: "/images/Projects/FrontEnd/covid.png",
        tag: ["All", "FrontEnd"],
        gitUrl: "https://github.com/Wasif0787/Covid-Tracker",
        siteUrl: "https://covid-tracker-wasif.netlify.app/"
    },
    {
        id: 7,
        title: "Contact Management",
        desc: "Technology : React.js, Typescript, Redux",
        image: "/images/Projects/FrontEnd/cms.png",
        tag: ["All", "FrontEnd"],
        gitUrl: "https://github.com/Wasif0787/Contact-Management-System",
        siteUrl: "https://cms-redux.netlify.app/"
    },
    {
        id: 8,
        title: "To-DO",
        desc: "Technology : ReactJs,Tailwind,Redux",
        image: "/images/Projects/FrontEnd/toDo.png",
        tag: ["All", "FrontEnd"],
        gitUrl: "https://github.com/Wasif0787/chai-aur-react/tree/main/reduxToolkitToDo",
        siteUrl: "https://to-do-redux-toolkit.netlify.app/"
    },
    {
        id: 9,
        title: "Currency Convertor",
        desc: "Technology : ReactJS, Tailwind",
        image: "/images/Projects/FrontEnd/currencyConvertor.png",
        tag: ["All", "FrontEnd"],
        gitUrl: "https://github.com/Wasif0787/chai-aur-react/tree/main/06currencyConvertor",
        siteUrl: "https://currency-convertor-101.netlify.app/"
    },
    {
        id: 10,
        title: "Password Generator",
        desc: "Technology : ReactJS, Tailwind",
        image: "/images/Projects/FrontEnd/passwordGenerator.png",
        tag: ["All", "FrontEnd"],
        gitUrl: "https://github.com/Wasif0787/chai-aur-react/tree/main/05passwordGenerator",
        siteUrl: "https://password-generatot.netlify.app/"
    },
    {
        id: 11,
        title: "Simon Game",
        desc: "Technology : HTML,CSS,JS",
        image: "/images/Projects/FrontEnd/simon.png",
        tag: ["All", "FrontEnd"],
        gitUrl: "https://github.com/Wasif0787/Simon-Game",
        siteUrl: "https://wasif0787.github.io/Simon-Game/"
    },
    {
        id: 12,
        title: "DocuParser",
        desc: "Technology : Nextjs, Google API",
        image: "/images/Projects/FrontEnd/docuParser.png",
        tag: ["All", "FrontEnd"],
        gitUrl: "https://github.com/Wasif0787/docu-parser",
        siteUrl: "https://docuparser.netlify.app/"
    }
];


const ProjectsSection = () => {
    const [tag, setTag] = useState("All")
    const handleTagChange = (newTag) => {
        setTag(newTag)
    }
    const filteredProjects = projectData.filter((project) =>
        project.tag.includes(tag)
    )
    return (
        <>
            <h2 id='projects' className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6 mb-8'>
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name="FullStack" isSelected={tag === "FullStack"} />
                <ProjectTag onClick={handleTagChange} name="FrontEnd" isSelected={tag === "FrontEnd"} />
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={index} title={project.title} desc={project.desc} imgUrl={project.image} gitUrl={project.gitUrl} siteUrl={project.siteUrl} />
                ))}
            </div>
        </>
    )
}

export default ProjectsSection
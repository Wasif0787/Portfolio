"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectData = [
    {
        id: 1,
        title: "Threads Clone",
        desc: "Technology : MERN",
        image: "/images/Projects/FullStack/threads.png",
        tag: ["All", "FullStack"],
        gitUrl: "/",
        siteUrl: "/"
    },
    {
        id: 2,
        title: "Blog Page",
        desc: "Technology : HTML,CSS,JS,EJS,NodeJS,MongoDB",
        image: "/images/Projects/FullStack/blog.png",
        tag: ["All", "FullStack"],
        gitUrl: "/",
        siteUrl: "/"
    },
    {
        id: 3,
        title: "Secrets Keeper",
        desc: "Technology : HTML,CSS,JS,EJS,NodeJS,MongoDB with User Authentication",
        image: "/images/Projects/FullStack/secrets.png",
        tag: ["All", "FullStack"],
        gitUrl: "/",
        siteUrl: "/"
    },
    {
        id: 4,
        title: "Student Management System",
        desc: "Technology : HTML,CSS,PHP,MySQL",
        image: "/images/Projects/FullStack/sms.png",
        tag: ["All", "FullStack"],
        gitUrl: "/",
        siteUrl: "/"
    },
    {
        id: 5,
        title: "To-DO",
        desc: "Technology : HTML,CSS,JS,EJS,MongoDB,NodeJS",
        image: "/images/Projects/FullStack/toDO.png",
        tag: ["All", "FullStack"],
        gitUrl: "/",
        siteUrl: "/"
    },
    {
        id: 6,
        title: "Currency Convertor",
        desc: "Technology : ReactJS, Tailwind",
        image: "/images/Projects/FrontEnd/currencyConvertor.png",
        tag: ["All", "FrontEnd"],
        gitUrl: "/",
        siteUrl: "/"
    },
    {
        id: 7,
        title: "Password Generator",
        desc: "Technology : ReactJS, Tailwind",
        image: "/images/Projects/FrontEnd/passwordGenerator.png",
        tag: ["All", "FrontEnd"],
        gitUrl: "/",
        siteUrl: "/"
    },
    {
        id: 7,
        title: "Simon Game",
        desc: "Technology : HTML,CSS,JS",
        image: "/images/Projects/FrontEnd/simon.png",
        tag: ["All", "FrontEnd"],
        gitUrl: "/",
        siteUrl: "/"
    }
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All")
    const handleTagChange = (newTag) => {
        setTag(newTag)
    }
    const filteredProjects = projectData.filter((project)=>
        project.tag.includes(tag)
    )
    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag==="All"}/>
                <ProjectTag onClick={handleTagChange} name="FullStack" isSelected={tag==="FullStack"}/>
                <ProjectTag onClick={handleTagChange} name="FrontEnd" isSelected={tag==="FrontEnd"}/>
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project,index) => (
                    <ProjectCard key={index} title={project.title} desc={project.desc} imgUrl={project.image} gitUrl={project.gitUrl} siteUrl={project.siteUrl} />
                ))}
            </div>
        </>
    )
}

export default ProjectsSection
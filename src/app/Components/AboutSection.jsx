"use client"
import React, { useTransition, useState } from "react";
import Image from "next/image"
import TabButton from "./TabButton";
const AboutSection = () => {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>EJS</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>Java</li>
        </ul>

      )
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>B.Tech CSE at Aliah University, Kolkata (2020-2024)</li>
        </ul>
      )
    },
    {
      title: "Experience",
      id: "experience",
      content: (
        <ul className="list-disc pl-2">
          <li>
            Solvative
            <ul>
              <li>Full Time : December 2024 - present</li>
              <li>Internship : July 2024 - November 2024</li>
            </ul>
          </li>
        </ul>
      )
    }
  ]

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2  gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image className="mb-4 md:mb-0" src="/images/about-section.jpg" width={500} height={500} alt="about" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl text-white font-bold mb-4 ">ABOUT ME</h2>
          <p className="text-base lg:text-lg">
            Hi, I’m Wasif Hussain!
            <br />
            A passionate Full Stack Developer with expertise in crafting seamless web applications. I specialize in building scalable backend architectures and intuitive user interfaces using technologies like Next.js, Node.js, and MongoDB. With a knack for solving complex problems and a dedication to clean, efficient code, I enjoy turning ideas into impactful digital solutions.
            <br />
            Let’s create something amazing together!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

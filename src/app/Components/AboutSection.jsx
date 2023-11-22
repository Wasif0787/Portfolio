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
          <li>Java</li>
          <li>HLML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>Express</li>
          <li>React JS</li>
          <li>Node.JS</li>
          <li>EJS</li>
        </ul>
      )
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>B.Tech CSE at Aliah University, Kolkata</li>
        </ul>
      )
    },
    {
      title: "Certification",
      id: "certification",
      content: (
        <ul className="list-disc pl-2">
          <li>XYZ</li>
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
    <section className="text-white">
      <div className="md:grid md:grid-cols-2  gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image className="mb-4 md:mb-0" src="/images/about-section.jpg" width={500} height={500} alt="about" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl text-white font-bold mb-4 ">ABOUT ME</h2>
          <p className="text-base lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eligendi quae saepe provident, voluptates ipsam nobis praesentium quos, enim deleniti eos veritatis in nam vel. Esse ut voluptate, ad sed iste qui necessitatibus aut quibusdam laboriosam suscipit odio voluptates consectetur repellat aperiam. Doloremque deserunt sunt non. Doloribus, voluptate saepe? Recusandae labore quas repellat distinctio et? Distinctio sapiente quam accusantium tempora!</p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>Certification</TabButton>
          </div>
            <div className="mt-8">{TAB_DATA.find((t)=>t.id===tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

"use client"
import React,{useTransition,useState} from "react";
import Image from "next/image"
const AboutSection = () => {
  const [tab,setTab] = useState("skills")
  const [startTransition,isPending] = useTransition()

  const handleTabChange=(id)=>{
    startTransition(()=>{
      setTab(id)
    })
  }

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2  gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image className="mb-4 md:mb-0" src="/images/about-section.jpg" width={500} height={500} alt="about"/>
        <div>
          <h2 className="text-4xl text-white font-bold mb-4 ">ABOUT ME</h2>
          <p className="text-base lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eligendi quae saepe provident, voluptates ipsam nobis praesentium quos, enim deleniti eos veritatis in nam vel. Esse ut voluptate, ad sed iste qui necessitatibus aut quibusdam laboriosam suscipit odio voluptates consectetur repellat aperiam. Doloremque deserunt sunt non. Doloribus, voluptate saepe? Recusandae labore quas repellat distinctio et? Distinctio sapiente quam accusantium tempora!</p>
          <div className="flex flex-row mt-8">
            <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">Skills</span>
            <span>Education</span>
            <span>Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

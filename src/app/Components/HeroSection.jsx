"use client";
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    const downloadCV = () => {
        const link = document.createElement('a');
        const driveLink = 'https://drive.google.com/file/d/1aNUC1Ts8rvOOY2B6PHu70VFfTaovsmjV/view?usp=drive_link'; // Replace with your Google Drive link
        link.href = `${driveLink}?export=download`;
        link.download = 'WasifHussainResume.pdf'; // Replace with the desired filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">Hello, I&apos;m{" "}</span>{" "}
                        <br />
                        <TypeAnimation
                            sequence={[
                                "Wasif Hussain",
                                1000,
                                "Web Developer",
                                1000,
                                "CSE Student",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, inventore.</p>
                    <div>
                        <button className="bg-gradient-to-br w-full sm:w-fit from-primary-500  to-secondary-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4 ">
                            Hire Me
                        </button>
                        <button className="mt-4 mb-4 bg-gradient-to-br w-full sm:w-fit from-primary-500  to-secondary-500 px-1 py-1  text-white rounded-full" onClick={downloadCV}>
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            src="/images/boy.png"
                            alt='hero image'
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
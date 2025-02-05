"use client";
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
    const cvUrl = "https://drive.google.com/file/d/1OtYEBtPaiIoyQK2zgG8YwWThmuK85gjX/view"
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 w-full p-10 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">Hello, I&apos;m{" "}</span>{" "}
                        <br />
                        <TypeAnimation
                            sequence={[
                                "Wasif Hussain",
                                1000,
                                "Full Stack Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>Your Friendly Neighbourhood Developer.Trying to do better.</p>
                    <div>
                        <Link href={"/#contact"} className="bg-gradient-to-br w-full sm:w-fit from-primary-500  to-secondary-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4 ">
                            Hire Me
                        </Link>
                        <button className="mt-4 mb-4 bg-gradient-to-br w-full sm:w-fit from-primary-500  to-secondary-500 px-1 py-1  text-white rounded-full">
                            <Link target="_blank" href={cvUrl}
                                rel="noopener noreferrer" className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='col-span-3 place-self-center mt-4 lg:mt-0'>
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

"use client"
import Link from 'next/link';
import React, { useRef, useState } from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const EmailSection = () => {
    const [emailSubmitted,setEmailSubmitted]  = useState(false)
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_9pii4wg","template_rp1k1l6", form.current,"1X6sX2TvCQp6ICRGL")
            .then((result) => {
                console.log(result.text);
                console.log("Sent");
                setEmailSubmitted(true)
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section className='grid md:grid-cols-2 my-12 py-24 gap-4 relative' id='contact'>
            <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className='z-10'>
                <h5 className='text-xl font-bold text-white my-2'>Lets Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis exercitationem iusto sapiente labore voluptatibus magnam reiciendis est laborum repellendus, consectetur ratione voluptatum eius quas! Expedita quam voluptate similique iure unde.
                </p>
                <div className='socials flex flex-row gap-3 mb-6'>
                    <Link href={"https://github.com/Wasif0787"} target="_blank"
                        rel="noopener noreferrer">
                        <FaGithub size={30} />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/787wasifhussain/"} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
                    <div className='mb-6'>
                        <label htmlFor="email" className='text-white mb-2  block text-sm font-medium'>
                            Your email
                        </label>
                        <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5' type="email" id='email' required placeholder='your-email@mail.com' name='user_email'/>
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="name" className='text-white block text-sm mb-2 font-medium'>
                            Your Name
                        </label>
                        <input className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5' type="text" id='name' name='user_name' required placeholder='Your name' />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className='text-white block text-sm mb-2 font-medium'>
                            Message
                        </label>
                        <textarea name="message" id="message" cols="30" rows="10" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5' placeholder='Lets Connect and talk about ...'>
                        </textarea>
                    </div>
                    <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                        Send Message
                    </button> 
                    {
                        emailSubmitted && (
                            <p className='text-green-500 text-sm mt-2'>
                                Email sent successfully
                            </p>
                        )
                    }
                </form>
            </div>
        </section>
    )
}

export default EmailSection
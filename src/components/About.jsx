import React from 'react'
import { RiReactjsFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export default function About() {
  return (
    <div className='flex flex-col md:flex-row justify-between md:px-[10%] lg:px-[20%] px-[5%] text-white'>
        <div>
            <div className='text-3xl font-bold mb-4'>About</div>
            <hr className='border-[#03FD9F] mb-4' />
            <div className='text-lg md:text-xl font-extralight'>
                <div className='mb-4'>
                    Hello! I'm Saiel Naik, a passionate software developer with a <span className='text-[#03FD9F] font-bold'>B.E. in Computer Engineering</span>. I specialize in creating dynamic web applications using <span className='text-[#03FD9F] font-bold'>React, Next.js, and Vite</span>, focusing on elegant digital experiences.
                </div>
                <div className='mb-5'>
                    Collaboration and teamwork drive my work ethic, and <span className='text-[#03FD9F] font-bold'>I enjoy exploring new technologies and contributing to open-source projects.</span> I'm eager to tackle new challenges and bring innovative ideas to life.
                </div>
                <div className='flex justify-center font-bold'>
                    Feel free to connect with me! 💚
                </div>
            </div>
            <div className='text-3xl font-bold mt-8 mb-4'>Skills</div>
            <hr className='border-[#03FD9F] mb-4' />
            <div className='text-[300%] sm:text-[500%] lg:text-[600%] text-center'>
                <div className='flex flex-wrap justify-center gap-4'>
                    <div className='bg-[#363636] rounded-xl p-4 hover:bg-[#03FD9F] text-[#61DBFB]'>
                        <RiReactjsFill />
                        <div className='text-[20%]'>React Js</div>
                    </div>
                    <div className='bg-[#363636] rounded-xl p-4 hover:bg-[#03FD9F]'>
                        <SiNextdotjs />
                        <div className='text-[20%]'>Next Js</div>
                    </div>
                    <div className='bg-[#363636] rounded-xl p-4 hover:bg-[#03FD9F] text-[#c861fb]'>
                        <SiVite />
                        <div className='text-[20%]'>Vite</div>
                    </div>
                    <div className='bg-[#363636] rounded-xl p-4 hover:bg-[#03FD9F] text-[#F05340]'>
                        <FaLaravel />
                        <div className='text-[20%]'>Laravel</div>
                    </div>
                    <div className='bg-[#363636] rounded-xl p-4 hover:bg-[#03FD9F] text-[#6d28d9]'>
                        <RiTailwindCssFill />
                        <div className='text-[20%]'>Tailwind</div>
                    </div>
                </div>

                <div className='flex flex-wrap justify-center gap-4 mt-4'>
                    <div className='bg-[#363636] rounded-xl p-4 hover:bg-[#03FD9F] text-[#e34c26]'>
                        <FaHtml5 />
                        <div className='text-[20%]'>HTML</div>
                    </div>
                    <div className='bg-[#363636] rounded-xl p-4 hover:bg-[#03FD9F] text-[#264de4]'>
                        <FaCss3Alt />
                        <div className='text-[20%]'>CSS</div>
                    </div>
                    <div className='bg-[#363636] rounded-xl p-4 hover:bg-[#03FD9F] text-[#f0db4f]'>
                        <FaJs />
                        <div className='text-[20%]'>JavaScript</div>
                    </div>
                    <div className='bg-[#363636] rounded-xl p-4 hover:bg-[#03FD9F] text-[#777BB3]'>
                        <FaPhp />
                        <div className='text-[20%]'>PHP</div>
                    </div>
                </div>

                <div className='flex flex-wrap justify-center gap-4 mt-4'>
                    <div className='bg-[#363636] rounded-xl p-4 hover:bg-[#03FD9F] text-[#4DB33D]'>
                        <SiMongodb />
                        <div className='text-[20%]'>MongoDB</div>
                    </div>
                    <div className='bg-[#363636] rounded-xl p-4 hover:bg-[#03FD9F] text-[#00758f]'>
                        <SiMysql />
                        <div className='text-[20%]'>MySQL</div>
                    </div>
                    <div className='bg-[#363636] rounded-xl p-4 hover:bg-[#03FD9F] text-[#0064a5]'>
                        <BiLogoPostgresql />
                        <div className='text-[20%]'>PostgreSQL</div>
                    </div>
                    <div className='bg-[#363636] rounded-xl p-4 hover:bg-[#03FD9F] text-[#F1502F]'>
                        <FaGitAlt />
                        <div className='text-[20%]'>Git</div>
                    </div>
                    <div className='bg-[#363636] rounded-xl p-4 hover:bg-[#03FD9F] text-[#0078d7]'>
                        <VscVscode />
                        <div className='text-[20%]'>VS Code</div>
                    </div>
                </div>
            </div>
            <div className='text-3xl font-bold mt-8 mb-4'>Education</div>
            <div className=''>   
                <ol class="items-center sm:flex">
                    <li class="relative mb-6 sm:mb-0">
                        <div class="flex items-center">
                            <div class="z-10 flex items-center justify-center w-6 h-6  rounded-full ring-0  bg-[#03FD9F] sm:ring-8 ring-gray-900 shrink-0">
                                <svg class="w-2.5 h-2.5  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </div>
                            <div class="hidden sm:flex w-full  h-0.5 bg-[#03FD9F]"></div>
                        </div>
                        <div class="mt-3 sm:pe-8">
                            <h3 class="text-lg font-semibold  text-white">Information and Communication Technology System Maintenance</h3>
                            <time class="block mb-2 text-sm font-normal leading-none  text-[#03FD9F]">2018</time>
                            <p class="text-base font-normal  text-gray-400">ITI</p>
                        </div>
                    </li>
                    <li class="relative mb-6 sm:mb-0">
                        <div class="flex items-center">
                            <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0  bg-[#03FD9F] sm:ring-8 ring-gray-900 shrink-0">
                                <svg class="w-2.5 h-2.5  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </div>
                            <div class="hidden sm:flex w-full  h-0.5 bg-[#03FD9F]"></div>
                        </div>
                        <div class="mt-3 sm:pe-8">
                            <h3 class="text-lg font-semibold  text-white">Diploma in Computer Engineering</h3>
                            <time class="block mb-2 text-sm font-normal leading-none text-[#03FD9F]">2021</time>
                            <p class="text-base font-normal  text-gray-400">Agnel Polytechnic</p>
                        </div>
                    </li>
                    <li class="relative mb-6 sm:mb-0">
                        <div class="flex items-center">
                            <div class="z-10 flex items-center justify-center w-6 h-6  rounded-full ring-0  bg-[#03FD9F] sm:ring-8 ring-gray-900 shrink-0">
                                <svg class="w-2.5 h-2.5  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                            </div>
                            <div class="hidden sm:flex w-full  h-0.5 bg-[#03FD9F]"></div>
                        </div>
                        <div class="mt-3 sm:pe-8">
                            <h3 class="text-lg font-semibold = text-white">B.E. Computer Engineering</h3>
                            <time class="block mb-2 text-sm font-normal leading-none  text-gray-500">2024</time>
                            <p class="text-base font-normal  text-gray-400">Padre Conceicao College Of Engineering</p>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    </div>
  )
}

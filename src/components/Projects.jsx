import React from 'react';
import TP from '../tripplanner.png';
import watherapp from '../watherapp.png';
import ET from '../ET.png';
import { SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiGooglegemini } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiAxios } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiClerk } from "react-icons/si";
import { FaGithub } from "react-icons/fa";


export default function Projects() {
  return (
    <div className='flex flex-col md:flex-row justify-between md:px-[10%] lg:px-[20%] px-[5%] text-white mt-5'>
      <div>
        <div className='text-3xl font-bold mb-4'>Portfolio</div>
        <hr className='border-[#03FD9F] mb-4' />

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-[#3c3c3c] p-4 rounded-lg shadow-lg'>
            <div className='flex justify-center w-full'>
              <div className='w-full rounded-t-lg overflow-hidden shadow-xl'>
                <img src={watherapp} alt="Weather App" className='w-full h-full object-cover' />
              </div>
            </div>
            <div className='p-4 text-white'>
              <h3 className='text-xl font-bold mb-2'>Weather App</h3>
              <p className='text-sm mb-4'>
                Delivered a seamless user experience by integrating real-time weather data with responsive design, enhancing app functionality and visual appeal.
              </p>
              <div className='flex justify-start items-center space-x-3'>
                <div className='relative group'>
                  <RiTailwindCssFill className='text-2xl text-[#06B6D4]' />
                  <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded-lg px-2 py-1 transition-opacity duration-300'>
                    Tailwind CSS
                  </span>
                </div>
                <div className='relative group'>
                  <FaReact className='text-2xl text-[#61DBFB]' />
                  <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded-lg px-2 py-1 transition-opacity duration-300'>
                    React Js
                  </span>
                </div>
                <div className='relative group'>
                  <SiAxios className='text-2xl text-[#bdbdbd]' />
                  <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded-lg px-2 py-1 transition-opacity duration-300'>
                    Axios
                  </span>
                </div>
              </div>
              <div className='mt-4'>
                <a href="https://github.com/saielnaik/weather-app" target="_blank" rel="noopener noreferrer">
                  <button className='bg-[#03FD9F] text-black py-2 px-4 rounded-lg hover:bg-[#00D67D] transition duration-300 flex justify-evenly items-center'>
                    <FaGithub className='mr-2' />View GitHub 
                  </button>
                </a>
              </div>
            </div>
          </div>

         <div className='bg-[#3c3c3c] p-4 rounded-lg shadow-lg'>
            <div className='flex justify-center w-full'>
              <div className='w-full rounded-t-lg overflow-hidden'>
                <img src={TP} alt="AI Trip Planner" className='w-full h-full object-cover shadow-xl' />
              </div>
            </div>
            <div className='p-4 text-white'>
              <h3 className='text-xl font-bold mb-2'>AI Trip Planner</h3>
              <p className='text-sm mb-4'>
                Enhanced user experience by automating trip planning and hotel recommendations through AI-powered algorithms, improving planning efficiency for users.
              </p>
              <div className='flex justify-start items-center space-x-3'>
                <div className='relative group'>
                  <RiTailwindCssFill className='text-2xl text-[#06B6D4]' />
                  <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded-lg px-2 py-1 transition-opacity duration-300'>
                    Tailwind CSS
                  </span>
                </div>
                <div className='relative group'>
                  <SiVite className='text-2xl text-[#c861fb]' />
                  <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded-lg px-2 py-1 transition-opacity duration-300'>
                    Vite
                  </span>
                </div>
                <div className='relative group'>
                  <SiGooglegemini className='text-2xl text-[#FF5722]' />
                  <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded-lg px-2 py-1 transition-opacity duration-300'>
                    Google Gemini
                  </span>
                </div>
                <div className='relative group'>
                  <SiShadcnui className='text-2xl text-[#ffffff]' />
                  <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded-lg px-2 py-1 transition-opacity duration-300'>
                    Shadcn UI
                  </span>
                </div>
              </div>
              <div className='mt-4 flex'>
                <a href="https://github.com/saielnaik/ai-trip-planner" target="_blank" rel="noopener noreferrer">
                  <button className='bg-[#03FD9F] text-black py-2 px-4 rounded-lg hover:bg-[#00D67D] transition duration-300 flex justify-evenly items-center'>
                    <FaGithub className='mr-2' /> View GitHub 
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className='bg-[#3c3c3c] p-4 rounded-lg shadow-lg'>
            <div className='flex justify-center w-full'>
              <div className='w-full rounded-t-lg overflow-hidden'>
                <img src={ET} alt="Expense Tracker" className='w-full h-full object-cover shadow-xl' />
              </div>
            </div>
            <div className='p-4 text-white'>
              <h3 className='text-xl font-bold mb-2'>Expense Tracker</h3>
              <p className='text-sm mb-4'>
                Developed a feature-rich frontend application, serving as a springboard for backend development. This project solidified my web development skills.
              </p>
              <div className='flex justify-start items-center space-x-3'>
                <div className='relative group'>
                  <RiTailwindCssFill className='text-2xl text-[#06B6D4]' />
                  <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded-lg px-2 py-1 transition-opacity duration-300'>
                    Tailwind CSS
                  </span>
                </div>
                <div className='relative group'>
                  <RiNextjsFill className='text-2xl text-[#ffffff]' />
                  <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded-lg px-2 py-1 transition-opacity duration-300'>
                    Next Js
                  </span>
                </div>
                <div className='relative group'>
                  <BiLogoPostgresql className='text-2xl text-[#336791]' />
                  <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded-lg px-2 py-1 transition-opacity duration-300'>
                    Postgresql
                  </span>
                </div>
                <div className='relative group'>
                  <SiClerk className='text-2xl text-[#ffffff]' />
                  <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded-lg px-2 py-1 transition-opacity duration-300'>
                    Clerk
                  </span>
                </div>
              </div>
              <div className='mt-4'>
                <a href="https://github.com/saielnaik/expense-tracker" target="_blank" rel="noopener noreferrer">
                  <button className='bg-[#03FD9F] text-black py-2 px-4 rounded-lg hover:bg-[#00D67D] transition duration-300 flex justify-evenly items-center'>
                    <FaGithub className='mr-2' /> View GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-5 flex justify-center'>
                <a href="https://github.com/saielnaik" target="_blank" rel="noopener noreferrer">
                  <button className='bg-[#03FD9F] text-black py-2 px-4 rounded-lg hover:bg-[#00D67D] transition duration-300 flex justify-evenly items-center'>
                    <FaGithub className='mr-2' /> View More Projects On GitHub
                  </button>
                </a>
        </div>
      </div>
    </div>
  );
}

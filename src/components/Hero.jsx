import React from 'react';
import me from '../me.png';
import { IoMdDownload } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";




export default function Hero() {
  return (
    <div className='home flex flex-col md:flex-row justify-between md:px-[20%] pt-[6%]'>
      <div className='hero text-white md:w-1/2'>
        <div className='text-lg md:text-xl'>
          Software Developer
        </div>
        <div className='text-[450%] mb-[-2%] font-semibold'>
          Hello I'm
        </div>
        <div className='text-[500%] text-[#03FD9F] '>
          Saiel Naik
        </div>
        <div className='text-[120%] font-thin pt-2'>
          <div className='pb-2'>
            I excel in problem-solving and teamwork and
          </div>
          <div>
            I specialize in React, Next.js, and NestJS.
          </div>
          <div className='flex'>
            <button className='border border-[#03FD9F] px-5 rounded-full flex items-center mr-5 text-[#03FD9F] mt-5 hover:bg-[#03FD9F] hover:text-[#202020] transition-colors duration-300'>
                DOWNLOAD CV <span className='ml-2'><IoMdDownload /></span>
            </button>
            <div className='flex text-[#03FD9F] text-2xl mt-5'>
                <div className='border border-[#03FD9F] rounded-full p-3 mr-5 w-12 h-12 flex items-center justify-center hover:bg-[#03FD9F] hover:text-[#202020] transition-colors duration-300'>
                <button className=''>
                    <FaGithubSquare />
                </button>
                </div>
                <div className='border border-[#03FD9F] rounded-full p-3 mr-5 w-12 h-12 flex items-center justify-center hover:bg-[#03FD9F] hover:text-[#202020] transition-colors duration-300'>
                <button>
                    <FaLinkedin />
                </button>
                </div>
                <div className='border border-[#03FD9F] rounded-full p-3 w-12 h-12 flex items-center justify-center hover:bg-[#03FD9F] hover:text-[#202020] transition-colors duration-300'>
                <button>
                    <BiLogoGmail />
                </button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center md:w-1/2'>
        <img src={me} alt="Logo" width={400} className='pl-5' />
        <hr className='border-[#03FD9F]' />
      </div>
    </div>
  );
}

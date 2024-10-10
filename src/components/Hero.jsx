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
        <div className='text-lg md:text-xl text-center lg:text-left'>
          Software Developer
        </div>
        <div className='lg:text-[450%] text-[350%] mb-[-2%] font-semibold text-center lg:text-left'>
          Hello I'm
        </div>
        <div className='lg:text-[500%] text-[400%] text-[#03FD9F] text-center lg:text-left'>
          Saiel Naik
        </div>
        <div className='text-[120%] font-thin pt-2'>
          <div className='pb-2 text-center lg:text-left'>
            I excel in problem-solving and teamwork and
          </div>
          <div className='text-center lg:text-left'>
            I specialize in React and Next.js.
          </div>

          <div className='flex flex-col items-center lg:flex-row lg:items-start lg:justify-start mt-5'>
            <a
              href="https://drive.google.com/file/d/1X7-7h0Mf5eAAhbzHZJ9Y2HdlvH8b4C8R/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <button className='border border-[#03FD9F] px-5 py-2 rounded-full flex items-center text-[#03FD9F] mt-5 hover:bg-[#03FD9F] hover:text-[#202020] transition-colors duration-300'>
                DOWNLOAD CV <span className='ml-2'><IoMdDownload /></span>
              </button>
            </a>

            <div className='flex mt-5 justify-center lg:justify-start text-[#03FD9F] text-2xl lg:ml-5'>
              <div className='border border-[#03FD9F] rounded-full p-3 mr-5 w-12 h-12 flex items-center justify-center hover:bg-[#03FD9F] hover:text-[#202020] transition-colors duration-300'>
                <a href="https://github.com/saielnaik" target="_blank" rel="noopener noreferrer">
                  <FaGithubSquare />
                </a>
              </div>

              <div className='border border-[#03FD9F] rounded-full p-3 mr-5 w-12 h-12 flex items-center justify-center hover:bg-[#03FD9F] hover:text-[#202020] transition-colors duration-300'>
                <a href="https://www.linkedin.com/in/saiel-naik/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>

              <div className='border border-[#03FD9F] rounded-full p-3 w-12 h-12 flex items-center justify-center hover:bg-[#03FD9F] hover:text-[#202020] transition-colors duration-300'>
                <a href="mailto:saielnaikwork@gmail.com">
                  <BiLogoGmail />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='hidden md:flex items-center justify-center md:w-1/2'>
  <img src={me} alt="Logo" width={400} className='pl-5' />
  <hr className='border-[#03FD9F]' />
</div>

    </div>
  );
}

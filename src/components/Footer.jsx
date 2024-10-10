import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center px-6 md:px-[10%] lg:px-[20%] text-white bg-[#000000] py-6 mt-5'>
        <div className='flex items-center text-3xl md:text-4xl'>
            <p>Saiel</p>
            <p className='text-[#03FD9F]'>.</p>
        </div>

       <div className='mt-4 md:mt-0'>
            <p className='hover:text-[#03FD9F] text-center md:text-left'>saielnaikwork@gmail.com</p>
        </div>

        <div className='flex space-x-4 text-3xl md:text-2xl mt-4 md:mt-0'>
      <a 
        href="https://www.linkedin.com/in/saiel-naik" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaLinkedin className='hover:text-[#03FD9F] cursor-pointer' />
      </a>

      <a 
        href="https://github.com/saielnaik" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaGithubSquare className='hover:text-[#03FD9F] cursor-pointer' />
      </a>

      <a 
        href="https://www.instagram.com/saielnaik/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaSquareInstagram className='hover:text-[#03FD9F] cursor-pointer' />
      </a>
    </div>
    </div>
  )
}

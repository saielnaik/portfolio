import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const nav = {
    home: { label: "HOME", id: "home" },
    about: { label: "ABOUT", id: "about" },
    work: { label: "WORK", id: "projects" },
    contact: { label: "CONTACT", id: "contact" },
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex justify-between items-center px-4 md:px-[20%] pt-5 text-white bg-[#202020] relative'>
      <div className='flex text-4xl'>
        <p>Saiel</p>
        <p className='text-[#03FD9F]'>.</p>
      </div>

      {/* Desktop Links - Visible on medium screens and above */}
      <div className="hidden md:flex space-x-8">
        {Object.values(nav).map(({ label, id }, index) => (
          <a
            href={`#${id}`}
            className='text-lg text-white hover:text-[#03FD9F] transition-colors duration-300'
            key={index}
          >
            {label}
          </a>
        ))}
        <a 
          href="mailto:saielnaikwork@gmail.com" 
          className='text-[#202020] bg-[#03FD9F] px-5 py-2 rounded-full hover:bg-[#03FD9F]/80 transition-colors duration-300'
        >
          HIRE ME
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer" onClick={toggleNavbar}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu - Hidden on larger screens */}
      <div className={`fixed top-0 left-0 w-3/4 h-full bg-[#202020] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='flex flex-col items-center mt-20'>
          {Object.values(nav).map(({ label, id }, index) => (
            <a
              href={`#${id}`}
              className='py-4 text-lg text-white hover:text-[#03FD9F] transition-colors duration-300'
              key={index}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
          <a 
            href="mailto:saielnaikwork@gmail.com" 
            className='mt-4 text-[#202020] bg-[#03FD9F] px-5 py-2 rounded-full hover:bg-[#03FD9F]/80 transition-colors duration-300'
          >
            HIRE ME
          </a>
        </div>
      </div>
    </div>
  );
}

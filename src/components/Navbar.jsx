import React from 'react';

export default function Navbar() {
  const nav = {
    home: "HOME",
    about: "ABOUT",
    work: "WORK",
    contact: "CONTACT",
  };

  return (
    <div className='flex flex-col md:flex-row justify-between items-center px-4 md:px-[20%] pt-5 text-white'>
      <div className='flex text-4xl'>
        <p>Saiel</p>
        <p className='text-[#03FD9F]'>.</p>
      </div>
      <div className='flex items-center text-[100%] mt-3 md:mt-0'>
        {Object.values(nav).map((value, index) => (
          <a className='pr-7 hover:text-[#03FD9F] transition-colors duration-300' key={index}>{value}</a>
        ))}
        <a className='text-[#202020] bg-[#03FD9F] pl-5 pr-5 pt-1 pb-1 rounded-full hover:bg-[#03FD9F]/80 transition-colors duration-300'>
          HIRE ME
        </a>
      </div>
    </div>
  );
}

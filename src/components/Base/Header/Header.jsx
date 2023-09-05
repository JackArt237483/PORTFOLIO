import React from 'react'
import logo_header from "../../../assets/SVG/LOGO-HEADER.svg"

function Header() {
  return (
    <div className='w-[1230px] mx-auto pt-[35px]'>
    <div className='flex justify-between items-center w-[1230px]'>
      <div className='flex justify-start'>
        <img src={logo_header} alt="logo_heaer"/>
          <ul className='flex justify-between w-[500px] ml-[60px] gap-[40px]
          text-[16px] leading-[25.6px] text-white'>
            <li>Services</li>
            <li>Case Studies</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contacts</li>
          </ul>
        </div>
        <button className='bg-[#7772F1] w-[199px] h-[52px]
        p-[0px_40px] rounded-[4px] text-[16px] text-white'>
        Talk to a human</button>
      </div>
    </div>
  )
}

export default Header

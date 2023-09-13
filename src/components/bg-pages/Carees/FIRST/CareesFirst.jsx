import React from 'react'
import Header from "../../../Base/Header/Header"
import home from "../../../../assets/ServiesImage/Home.svg"
import arrow from "../../../../assets/ServiesImage/Right-chevron.svg"
import { NavLink } from 'react-router-dom'
import iphone from "../../../../assets/SVG/iPhone (2).svg"
import chat from "../../../../assets/SVG/Chat.svg"


function CareesFirst() {
  return (
    <div className='max-w-[1920px] mx-auto bg-services bg-no-repeat bg-cover'>
      <Header/>
      <div className='w-[900px] mx-auto mt-[80px] text-center'>
        <div className='w-[305px] flex justify-between mx-auto'>
           <NavLink to='/'>
           <img src={home} alt="home" />
           </NavLink>
           <img src={arrow} alt="arrow" />
            <p className='text-white leading-[21px] text-[14px]'>
            About us</p>
            <img src={arrow} alt="arrow" />
            <p className='text-white leading-[21px] text-[14px]'>
            Careers at Createx Agency</p>
        </div>
        <h1 className='mt-[40px] text-[72px] leading-[130%] text-white'>
        Careers at Createx Agency</h1>
        <p className='mt-[24px] text-[20px] leading-[30px] text-center text-white opacity-60'>
        We’re looking for extraordinary talents! If you're passionate about SEO and digital marketing, we want to hear from you.</p>
      </div>
      <div className='w-[458px] mx-auto flex mt-[60px] pb-[120px] justify-between items-center'>
        <div className='w-[202px] flex justify-between items-center'>
           <img src={chat} alt="chart" />
           <div className='gap-[12px]'>
            <b className='text-[14px] leading-[150%] text-white opacity-60'>
              Talk to us</b>
            <p className='text-[18px] leading-[150%] text-white'>
            hello@createx.com</p>
           </div>
        </div>
        <div className='w-[2px] h-[40px] bg-line opacity-40'></div>
        <div className='w-[177px] flex justify-between items-center'>
           <img src={iphone} alt="iphone" />
           <div className='gap-[12px]'>
            <b className='text-[14px] leading-[150%] text-white opacity-60'>
            Call us</b>
            <p className='text-[18px] leading-[150%] text-white'>
            (405) 555-0128</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default CareesFirst

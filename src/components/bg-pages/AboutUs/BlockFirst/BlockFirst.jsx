import React from 'react'
import Header from "../../../Base/Header/Header"
import home from "../../../../assets/ServiesImage/Home.svg"
import arrow from "../../../../assets/ServiesImage/Right-chevron.svg"
import { NavLink } from 'react-router-dom'
import chart from "../../../../assets/PagesImage/Services/ic-chart.png"
import speaker from "../../../../assets/PagesImage/Services/ic-speaker.png"
import computer from "../../../../assets/PagesImage/Services/ic-computer (5).svg"

function BlockFirst() {
  return (
    <div className='bg-services bg-no-repeat bg-cover'>
      <Header/>
      <div className='w-[810px] mx-auto mt-[80px] text-center'>
        <div className='w-[105px] flex justify-between mx-auto'>
           <NavLink to='/'>
           <img src={home} alt="home" />
           </NavLink>
           <img src={arrow} alt="arrow" />
            <p className='text-white leading-[21px] text-[14px]'>
            About us</p>
        </div>
        <h1 className='mt-[40px] text-[72px] leading-[130%] text-white'>
        About Us</h1>
        <p className='mt-[32px] text-[20px] leading-[30px] text-center text-white opacity-60'>
        Our agency has been successfully operating in digital marketing since 2012. We are proud to offer you quality and exemplary service. We help our clients get better results with our creative and data-driven approach to online advertising. </p>
      </div>
      <div className='w-[1230px] mx-auto flex mt-[120px] pb-[120px] justify-between items-center'>
        <div className='w-[256px] flex justify-between items-center'>
           <img src={chart} alt="chart" />
           <p className='text-[20px] leading-[150%] text-white'>
            SEO Content Strategy</p>
        </div>
        <div className='w-[2px] h-[40px] bg-line opacity-40'></div>
        <div className='w-[231px] flex justify-between items-center'>
           <img src={speaker} alt="chart" />
           <p className='text-[20px] leading-[150%] text-white'>
           Content Marketing</p>
        </div>
        <div className='w-[2px] h-[40px] bg-line opacity-40'></div>
        <div className='w-[368px] flex justify-between items-center'>
           <img src={computer} alt="chart" />
           <p className='text-[20px] leading-[150%] text-white'>
           Website & Social Media Marketing</p>
        </div>
      </div>
    </div>
  )
}

export default BlockFirst

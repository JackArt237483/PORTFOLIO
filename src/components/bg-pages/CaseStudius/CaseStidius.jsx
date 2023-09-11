import React from 'react'
import home from "../../../assets/ServiesImage/Home.svg"
import arrow from "../../../assets/ServiesImage/Right-chevron.svg"
import { NavLink } from 'react-router-dom'
import Header from '../../Base/Header/Header'

function CaseStidius() {
  return (
    <div className='bg-studius bg-no-repeat bg-cover'>
      <Header/>
      <div className='w-[810px] mx-auto mt-[80px] pb-[120px] text-center'>
        <div className='w-[127px] flex justify-between mx-auto'>
           <NavLink to="/"><img src={home} alt="home" /></NavLink>
           <img src={arrow} alt="arrow" />
           <NavLink to="/servies">
            <p className='text-white leading-[21px] text-[14px]'>
            Case Studies</p></NavLink></div>
        <h1 className='mt-[40px] text-[72px] leading-[130%] text-white'>
        Case Studies</h1>
        <p className='mt-[32px] text-[20px] leading-[30px] text-white opacity-60'>
        We help our clients get better results with our creative and data-driven approach to online advertising. View our case study portfolio and learn more about the process that sets us apart.</p>
        <div className='w-[600px] h-[83px] mt-[40px] mx-auto'>
         <div className='flex flex-col'>
               <label
               className='text-white text-[16px] leading-[160%] text-start'
               htmlFor="Name">Email</label>
               <div className='flex items-baseline'>
               <input
                className='w-[398px] h-[52px] bg-[#646161]/50
                text-[16px] text-white opacity-60 rounded-[4px]
                border border-solid border-[#646161]/50 mt-[12px] pl-[16px]'
                type="text"
                placeholder='Your working email'/>
                <button className='w-[154px] h-[52px]
                text-[16px] leading-[52px] text-white
                bg-perple p-[0px_40px] rounded-[0px_4px_4px_0px]'>
                Subscribe</button></div>
              </div>
         </div>
      </div>
    </div>
  )
}

export default CaseStidius

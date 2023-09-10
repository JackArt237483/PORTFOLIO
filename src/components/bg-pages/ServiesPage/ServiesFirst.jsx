import React from 'react'
import Header from '../../Base/Header/Header'
import home from "../../../assets/ServiesImage/Home.svg"
import arrow from "../../../assets/ServiesImage/Right-chevron.svg"
import phone from "../../../assets/ServiesImage/iPhone (1).svg"
import { NavLink } from 'react-router-dom'

function ServiesFirst() {
  return (
    <div className='bg-servies max-w-[1990px] mx-auto bg-cover bg-no-repeat'>
       <Header/>
       <div className='w-[820px] mx-auto mt-[82.5px] text-center pb-[120px]'>
         <div className='w-[100px] items-center mx-auto flex justify-between'>
            <img src={home} alt="home" />
            <NavLink to="/"><img src={arrow} alt="arrow" /></NavLink>
            <NavLink to="/services"><p className='text-[14px] leading-[21px] text-white opacity-[0.6]'>Servies</p>
        </NavLink>
          </div>
         <h1 className='text-[72px] leading-[130%] text-white mt-[40px]'>Our services</h1>
         <p className='text-[20px] leading-[30px] text-white opacity-[0.6] mt-[24px]'>
          We offer more than services. Our agency provides solutions to your top-priority concerns, involving customer targeting, email performance and sales growth. If there is no existing solution readily available, we create one, specifically to suit your business.</p>
        <div className='w-[371px] mx-auto mt-[60px] flex justify-between items-center'>
          <button className='w-[154px] h-[52px] text-[16px] leading-[52px] text-white
          p-[0px_40px] border border-solid border-white rounded-[4px]'>
            Start now</button>
          <div className='flex justify-between items-center'>
            <img src={phone} alt="phone" />
            <div className='w-[133px] text-start mt-[12px]'>
               <p className='text-[14px] leading-[21px] text-white opacity-[0.6]'>Call us</p>
               <b className='text-[18px] leading-[27px] text-white'>(405)555-0128</b>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default ServiesFirst

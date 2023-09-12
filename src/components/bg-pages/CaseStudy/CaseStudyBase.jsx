import React from 'react'
import home from "../../../assets/ServiesImage/Home.svg"
import arrow from "../../../assets/ServiesImage/Right-chevron.svg"
import image3 from '../../../assets/casestudius/image3.svg'
import { NavLink } from 'react-router-dom'
import Header from '../../Base/Header/Header'

function CaseStudyBase() {
  return (
    <div className='bg-studys bg-no-repeat bg-cover pb-[120px]'>
      <Header/>
      <div className='w-[810px] mx-auto mt-[80px] text-center'>
        <div className='w-[487px] flex justify-between mx-auto'>
           <NavLink to="/"><img src={home} alt="home" /></NavLink>
           <img src={arrow} alt="arrow" />
           <NavLink to="/casestudy">
            <p className='text-white leading-[21px] text-[14px]'>
            Case Studies</p></NavLink>
            <img src={arrow} alt="arrow" />
            <p className='text-white leading-[21px] text-[14px] opacity-60'>
              200% increase in conversion rate for Lovato Company</p>
          </div>
          </div>
          <div className='w-[1020px] text-center mx-auto'>
            <img
            className='w-[150px] h-[80px] mx-auto mt-[32px]'
            src={image3} alt="img" />
            <h1 className='text-[56px] mt-[24px] leading-[130%] text-white'>
            200% increase in conversion rate for Lovato Company</h1>
          </div>
     </div>
  )
}

export default CaseStudyBase
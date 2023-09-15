import React from 'react'
import Header from "../../../Base/Header/Header"
import home from "../../../../assets/ServiesImage/Home.svg"
import arrow from "../../../../assets/ServiesImage/Right-chevron.svg"
import { NavLink } from 'react-router-dom'

function PostFirst() {
  return (
  <div>
    <div className='bg-back_blog max-w-[1920px] mx-auto
    bg-no-repeat bg-cover pb-[120px]'>
      <div className='sticky z-[1]'>
      <Header/>
      </div>
      <div className='w-[810px] mx-auto mt-[80px] text-center z-[1] sticky'>
        <div className='w-[426px] flex justify-between mx-auto'>
           <NavLink to='/'>
           <img src={home} alt="home" />
           </NavLink>
           <img src={arrow} alt="arrow" />
            <NavLink to="/singlepost">
            <p className='text-white leading-[21px] text-[14px]'>Blog</p>
            </NavLink>
            <img src={arrow} alt="arrow" />
            <p className='text-white leading-[21px] text-[14px] opacity-60'>
            How to Increase Your ROI Through Scientific SEM?
            </p>
        </div>
      </div>
      <div className='w-[1020px] mx-auto text-center'>
        <h1 className='mt-[42px] text-[72px] leading-[130%] text-white z-[1] sticky'>
          How to Maximize Your ROI Through Scientific SEM?</h1>
      </div>
    </div>
  <div className='max-w-[1920px] mx-auto h-[540px]
  bg-black opacity-60 mt-[-540px]'></div>
  </div>
  )
}

export default PostFirst

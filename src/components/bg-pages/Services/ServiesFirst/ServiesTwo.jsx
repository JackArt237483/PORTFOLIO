import React from 'react'
import Header from "../../../Base/Header/Header"
import home from "../../../../assets/ServiesImage/Home.svg"
import arrow from "../../../../assets/ServiesImage/Right-chevron.svg"
import { NavLink } from 'react-router-dom'

function ServiesTwo() {
  return (
    <div className='bg-services bg-no-repeat bg-cover'>
      <Header/>
      <div className='w-[900px] mx-auto mt-[80px] pb-[120px] text-center'>
        <div className='w-[302px] flex justify-between mx-auto'>
           <img src={home} alt="home" />
           <img src={arrow} alt="arrow" />
           <NavLink to="/servies">
            <p className='text-white leading-[21px] text-[14px]'>
            Services</p></NavLink>
           <img src={arrow} alt="arrow" />
           <p className='text-white opacity-60 leading-[21px] text-[14px]'>Search Engine Optimization</p>
        </div>
        <h1 className='mt-[40px] text-[72px] leading-[130%] text-white'>
          Search Engine Optimization</h1>
        <p className='mt-[32px] text-[20px] leading-[30px] text-white opacity-60'>
          Ipsum blandit etiam nunc vitae. Duis lobortis odio vel morbi dui pellentesque enim integer facilisi. Ultrices vitae tempor amet nec euismod non. </p>
        <div className='w-[600px] mt-[40px] mx-auto'>
         <div className='flex flex-col'>
               <label
               className='text-white text-[16px] leading-[160%] text-start'
               htmlFor="Name">Your website URL</label>
               <div className='flex items-baseline'>
               <input
                className='w-[398px] h-[52px] bg-[#646161]/50
                text-[16px] text-white opacity-60 rounded-[4px]
                border border-solid border-[#646161]/50 mt-[12px] pl-[16px]'
                type="text"
                placeholder='http://yoursite.com'/>
                <button className='w-[211px] h-[52px]
                text-[16px] leading-[52px] text-white
                bg-perple p-[0px_40px] rounded-[0px_4px_4px_0px]'>
                Analyse your site</button></div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default ServiesTwo

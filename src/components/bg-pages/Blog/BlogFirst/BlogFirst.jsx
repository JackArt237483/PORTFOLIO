import React from 'react'
import Header from "../../../Base/Header/Header"
import home from "../../../../assets/ServiesImage/Home.svg"
import arrow from "../../../../assets/ServiesImage/Right-chevron.svg"
import { NavLink } from 'react-router-dom'

function BlogFirst() {
  return (
    <div className='bg-services bg-no-repeat bg-cover pb-[120px]'>
      <Header/>
      <div className='w-[810px] mx-auto mt-[80px] text-center'>
        <div className='w-[78px] flex justify-between mx-auto'>
           <NavLink to='/'>
           <img src={home} alt="home" />
           </NavLink>
           <img src={arrow} alt="arrow" />
            <p className='text-white leading-[21px] text-[14px]'>
            Blog</p>
        </div>
        <h1 className='mt-[42px] text-[72px] leading-[130%] text-white'>
        Blog</h1>
        <p className='mt-[24px] text-[20px] leading-[30px] text-center text-white opacity-60'>
        Thoughts, trends and up-to-date news in search and digital marketing. Subsribe to our blog and receive latest news weekly.</p>
        <div className='w-[600px] h-[83px] mt-[60px] mx-auto'>
               <div className='flex items-end justify-center'>
               <input
                className='w-[398px] h-[52px] bg-[#646161]/50
                text-[16px] text-white opacity-60 rounded-[4px]
                border border-solid border-[#646161]/50 mt-[12px] pl-[16px]'
                type="text"
                placeholder='Search the blog'/>
                <button className='w-[154px] h-[52px]
                text-[16px] leading-[52px] text-white
                bg-perple p-[0px_40px] rounded-[0px_4px_4px_0px]'>
                Search</button></div>
              </div>
         </div>
    </div>
  )
}

export default BlogFirst

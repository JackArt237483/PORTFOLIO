import React from 'react'
import animate from "../../assets/background/animate.png"

function Analitics() {
  return (
    <div className="bg-imagebg bg-no-repeat bg-cover mt-[83px]
    max-w-[1920px] mx-auto pb-[80px]">
      <div className="w-[1230px] pt-[80px] mx-auto flex justify-between">
         <img src={animate} alt="ant" />
         <div className='w-[600px]'>
           <h3 className='text-[46px] leading-[130%] text-white text-start'>
            Get a Free SEO Analysis!</h3>
           <form className='mt-[40px]'>
             <div className='flex justify-between'>
              <div className='flex flex-col'>
               <label
               className='text-white text-[16px] leading-[160%] text-start'
               htmlFor="Name">Name</label>
               <input
                className='w-[285px] h-[86px] bg-[#646161]/50
                text-[16px] text-white opacity-60 rounded-[4px]
                border border-solid border-[#646161]/50 mt-[12px]
                pl-[16px]'
                type="text"
                placeholder='Your name'/></div>
               <div className='flex flex-col'>
               <label
               className='text-white text-[16px] leading-[160%] text-start'
               htmlFor="Email">Email</label>
               <input
                 className='w-[285px] h-[86px] bg-[#646161]/50
                 text-[16px] text-white opacity-60 rounded-[4px]
                 border border-solid border-[#646161]/50 mt-[12px]
                 pl-[16px]'
                 type="text"
                 placeholder='Your working email'/></div>
             </div>
             <div className='text-start mt-[24px]'>
                <label
                 className='text-white text-[16px] leading-[160%]'
                 htmlFor="Email">Your website URL</label>
                <input
                className='w-[600px] h-[86px] bg-[#646161]/50 pl-[16px]
                text-[16px] text-white opacity-60 rounded-[4px]
                border border-solid border-[#646161]/50 mt-[12px]'
                type="text"
                placeholder='http://yoursite.com'/>
                <div className='flex items-center justify-between mt-[48px]'>
                  <div className='flex w-[320px] justify-between items-center h-[52px]'>
                   <input
                   className='w-[16px] h-[16px]'
                   type="checkbox"/>
                   <p className='w-[287px] text-white leading-[160%]
                   text-start'>
                    I agree to receive communications from Createx SEO Agency</p>
                  </div>
                  <button className='w-[220px] h-[52px] bg-perple
                  rounded-[4px] text-[16px] text-white leading-[52px]'>
                    Get a free analysis</button>
                </div>
             </div>
           </form>
         </div>
      </div>
    </div>
  )
}

export default Analitics

import React from 'react'
import attach from "../../../../assets/SVG/Attach.svg"

function Resume() {
  return (
    <div className='w-[1230px] mx-auto flex justify-between mt-[100px]'>
       <div className='w-[495px] text-start'>
          <h4 className='text-[46px] text-black leading-[130%]'>
            Didn’t find what you were looking for?</h4>
          <p className='text-[20px] text-black leading-[30px] mt-[40px]'>
            Send your CV or subscribe to our newsletter to receive information about new vacancies.</p>
       </div>
       <form className='w-[600px] h-[582px] flex justify-between flex-wrap content-between'>
         <div className='w-[285px]'>
            <label
            className='text-[16px] text-[#424551] leading-[160%]'
            htmlFor="Name">Name*</label>
            <input
            className='w-[285px] h-[52px] border border-solid border-[#D7DADD] pl-[16px]
            text-[16px] text-[#9A9CA5] leading-[160%] bg-[#f4f5f6] rounded-[4px] mt-[6px]'
            placeholder='Your name'
            type="text" />
         </div>
         <div className='w-[285px]'>
            <label
            className='text-[16px] text-[#424551] leading-[160%]'
            htmlFor="Name">Phone*</label>
            <input
            className='w-[285px] h-[52px] border border-solid border-[#D7DADD] pl-[16px]
            text-[16px] text-[#9A9CA5] leading-[160%] bg-[#f4f5f6] rounded-[4px] mt-[6px]'
            placeholder='Your phone number'
            type="text" />
         </div>
         <div className='w-[285px]'>
            <label
            className='text-[16px] text-[#424551] leading-[160%]'
            htmlFor="Name">Email</label>
            <input
            className='w-[285px] h-[52px] border border-solid border-[#D7DADD] pl-[16px]
            text-[16px] text-[#9A9CA5] leading-[160%] bg-[#f4f5f6] rounded-[4px] mt-[6px]'
            placeholder='Your working email'
            type="text" />
         </div>
         <div className='w-[285px]'>
            <label
            className='text-[16px] text-[#424551] leading-[160%]'
            htmlFor="Name">I am interested in*</label>
            <input
            className='w-[285px] h-[52px] border border-solid border-[#D7DADD] pl-[16px]
            text-[16px] text-[#9A9CA5] leading-[160%] bg-[#f4f5f6] rounded-[4px] mt-[6px]'
            placeholder='Choose...'
            type="text" />
         </div>
         <div>
            <label
            className='text-[16px] text-[#424551] leading-[160%]'
            htmlFor="Name">I am interested in*</label>
            <input
            className='w-[600px] h-[162px] border border-solid border-[#D7DADD] pl-[16px] pt-[-20px]
            text-[16px] text-[#9A9CA5] leading-[160%] bg-[#f4f5f6] rounded-[4px] mt-[6px]'
            placeholder='Choose...'
            type="text" />
         </div>
         <div className='flex h-[40px] justify-between items-center w-[151px] mt-[24px]'>
           <img  className='w-[24px] h-[24px]'
           src={attach} alt="attach" />
           <p className='text-[16px] text-black leading-[160px]'>
            Attach your CV*</p>
         </div>
         <div className='w-[460px] h-[40px] items-center flex justify-between'>
           <input type="checkbox"/>
           <p className='text-[16px] text-black leading-[160px]'>
           I want to suscribe to receive information about new vacancies.</p>
         </div>
         <button className='w-[151px] h-[52px] p-[0px_40px] bg-perple
         text-[16px] text-white leading-[52px] rounded-[4px]'>
            Send Resume
         </button>
       </form>
    </div>
  )
}

export default Resume

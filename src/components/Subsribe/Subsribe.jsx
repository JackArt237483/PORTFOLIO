import React from 'react'
import image1 from "../../assets/background/illustration (13).png"

function Subsribe() {
  return (
    <div className='max-w-[1920px] mx-auto bg-[#f4f5f6]
    h-[479px] mt-[120px]'>
      <div className='w-[1230px] mx-auto mt-[120px] flex
      pt-[56px] justify-between items-center'>
        <div className="w-[420px] text-start">
          <h2 className='text-[46px] leading-[130%] text-black'>
            Subsribe to our blog</h2>
          <p className='text-[20px] leading-[30px] mt-[24px] text-gray'>
            And receive latest trends in search, marketing, digital and news.</p>
          <div className='w-[420px] mt-[24px] '>
            <label
            className='text-[14px] leading-[21px] text-black'
            htmlFor="Email">Email</label>
            <div className='w-[420px] flex items-end justify-start mt-[7px]'>
               <input
                className='w-[290px] h-[44px] bg-white border border-solid
                border-[#D7DADD] text-[14px] leading-[21px] text-[#9A9CA5]
                rounded-[4px] pl-[16px]'
                placeholder='Your working email'
                type="text" />
                <button className='w-[190px] h-[44px] bg-perple
                text-[14px] leading-[44px] text-white rounded-[0px_4px_4px_0px]'>
                Subscribe
                </button>
            </div>
          </div>
          <div className="w-[400px] flex justify-between mt-[24px]">
             <input type="checkbox"/>
             <p className='text-[14px] leading-[44px] text-black'>
              I agree to receive communications from Createx SEO Agency.</p>
          </div>
        </div>
        <img src={image1} alt="image1"/>
      </div>
    </div>
  )
}

export default Subsribe

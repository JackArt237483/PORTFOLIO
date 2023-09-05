import React from 'react'
import arrow from "../../assets/PagesImage/HomeSvg/Left.svg"

function OurCleints() {
  return (
    <div className='max-w-[1920px] h-[782px] mt-[120px] mx-auto bg-[#F4F5F6]'>
      <div className="w-[1230px] mx-auto">
        <div className='flex justify-between items-center pt-[80px]'>
           <h3 className='text-black text-[46px] leading-[130%]'>
            Read our clients' case studies</h3>
           <div className='flex justify-around w-[100px] hover:items-center'>
             <img
             className='rotate-[0deg] w-[24px] h-[24px]
              hover:bg-perple hover:w-[48px]
              hover:h-[48px] color-white rounded-full'
             src={arrow} alt="arrow" />
             <img
             className='rotate-[180deg]  w-[24px] h-[24px]
             hover:bg-perple hover:w-[48px]
             hover:h-[48px] color-white rounded-full'
             src={arrow} alt="arrow" />
           </div>
        </div>
        <div>
          </div>
        </div>
      </div>
  )
}

export default OurCleints

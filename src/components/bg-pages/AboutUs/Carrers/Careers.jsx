import React from 'react'
import animate from "../../../../assets/background/illustration (12).png"

function Careers() {
  return (
    <div className='max-w-[1920px] mx-auto bg-[#f4f5f6] h-[512px] mt-[120px]'>
      <div className='w-[1230px] mx-auto flex justify-between items-center pt-[60px]'>
       <div>
         <img src={animate} alt="from" />
       </div>
       <div className='w-[600px] h-[272px] text-start'>
          <h2 className='text-black text-[46px] leading-[130%]'>Careers at Createx Agency</h2>
          <p className='text-black text-[20px] leading-[150%] mt-[40px]'>
            Ready to join us on our mission to deliver the best sales development services to businesses around the globe? We’re hiring!</p>
          <button
          className='text-white text-[16px] leading-[52px] mt-[60px]
          p-[0px_40px] bg-perple rounded-[4px] w-[199px] h-[52px]'
          >See careers</button>
       </div>
      </div>
    </div>
  )
}

export default Careers

import React from 'react'
import card from "../../../../assets/Analitics/illustration (10).png"

function Marketing() {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between items-center '>
    <div className='w-[590px]'>
      <h2 className='text-[32px] text-black leadung-[130%]'>Payed Traffic Management</h2>
      <p className='text-[16px] text-gray w-[483px] leadung-[130%] mt-[24px]'>
      Tortor vitae orci hendrerit lobortis eu. Metus aliquam sem tellus ut fringilla purus nisl, consectetur netus. Velit ac feugiat ut mattis dis nullam ultrices amet. Lacus eu neque arcu arcu curabitur at sapien. Id sed aliquet id sit nibh ornare massa scelerisque.</p>
      <div className='w-[328px] flex justify-between mt-[48px]'>
        <button className='text-[14px] text-perple leadung-[44px]
        w-[144px] h-[44px] p-[0px_32px] border border-solid border-perple
        rounded-[4px]'>Learn more</button>
        <button className='text-[14px] text-white leadung-[44px]
        w-[166px] h-[44px] p-[0px_32px] border border-solid border-perple
        bg-perple rounded-[4px]'>Try SEO toolkit</button>
      </div>
    </div>
    <img src={card} alt="card" />
  </div>
  )
}

export default Marketing

import React from 'react'
import card from "../../../../assets/Analitics/illustration (6).png"

function Social() {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between items-center mt-[100px]'>
      <div className='w-[590px]'>
        <h2 className='text-[32px] text-black leadung-[130%]'>Social Media Marketing</h2>
        <p className='text-[16px] text-gray w-[483px] leadung-[130%] mt-[24px]'>Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium.</p>
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

export default Social

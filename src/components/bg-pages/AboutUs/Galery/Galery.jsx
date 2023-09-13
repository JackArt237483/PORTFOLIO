import React from 'react'
import cardone from "../../../../assets/AboutUs/image (48).png"
import cardtwo from "../../../../assets/AboutUs/image (49).png"
import cardthree from "../../../../assets/AboutUs/image (50).png"
import cardfor from "../../../../assets/AboutUs/image (51).png"

function Galery() {
  return (
  <div className='w-[1230px] mx-auto mt-[180px]'>
    <div className='flex justify-between items-end'>
      <div>
        <img
        src={cardone} alt="cardone" />
        <img
        className='mt-[30px]'
        src={cardtwo} alt="cardtwo" />
      </div>
      <img
      src={cardthree} alt="cardone" />
      <img
      src={cardfor} alt="cardtwo" />
     </div>
     <div className='w-[805px] h-[266px] rounded-[4px] bg-[#f0eeee]
     mx-auto shadow-shadow-card px-[60px] mt-[-120px] z-[1] sticky'>
      <div className='w-[685px] h-[150px] text-start py-[40px]'>
        <h4 className='text-black text-[32px] leading-[130%]'>More than SEO agency</h4>
        <p className='text-gray text-[16px] leading-[160%] mt-[24px]'>Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium.</p>
      </div>
     </div>
  </div>
  )
}

export default Galery

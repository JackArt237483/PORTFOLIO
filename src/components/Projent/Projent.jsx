import React from 'react'
import one from "../../assets/SVG/circle-progress.png"
import two from "../../assets/SVG/circle-progress (1).png"
import three from "../../assets/SVG/circle-progress (2).png"
import fore from "../../assets/SVG/circle-progress (3).png"

function Projent() {
  return (
    <div className='w-[736px] mx-auto mt-[70px]'>
      <ul className='flex justify-between'>
        <li className='w-[148px] text-center'>
          <img src={one} alt="one" />
          <p className='text-[14px] leading-[21px] text-[#424551]
          mt-[20px]'>
            Years of experience</p>
        </li>
        <li className='w-[148px] text-center'>
          <img src={two} alt="one" />
          <p className='text-[14px] leading-[21px] text-[#424551]
          mt-[20px]'>
            Awards</p>
        </li>
        <li className='w-[148px] text-center'>
          <img src={three} alt="one" />
          <p className='text-[14px] leading-[21px] text-[#424551]
          mt-[20px]'>
            Projects</p>
        </li>
        <li className='w-[148px] text-center'>
          <img src={fore} alt="one" />
          <p className='text-[14px] leading-[21px] text-[#424551]
          mt-[20px]'>
            Happy clients</p>
        </li>
      </ul>
    </div>
  )
}

export default Projent

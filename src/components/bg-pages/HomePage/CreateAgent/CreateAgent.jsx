import React from 'react'
import persons from "../../../../assets/background/person.png"
import patno from "../../../../assets/background/patno.png"

function CreateAgent() {
  return (
  <div className='w-[1230px] mx-auto relative mt-[30px]'>
     <img src={patno} alt="potno" />
      <div className='flex justify-between items-center w-[1230px] mt-[152px] absolute top-0'>
        <div className='w-[390px] h-[400px] text-start'>
          <h4 className='text-[46px] text-[#1E212C] leading-[59.8px]'>Createx Agency</h4>
          <p className='text-[16px] text-[#787A80] leading-[25.6px] mt-[40px]'>
            Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.</p>
          <button className='rounded-[4px] bg-[#7772F1] w-[161px] h-[44px]
          p-[0px_32px] text-[14px] text-white leading-[44px] mt-[48px]'>
          More about us</button>
        </div>
        <img src={persons} alt="persons" />
      </div>
    </div>
  )
}

export default CreateAgent

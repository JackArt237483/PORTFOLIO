import React from 'react'
import card from "../../../../assets/Analitics/illustration (9).png"

function Content() {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between items-center '>
    <img src={card} alt="card" />
    <div className='w-[590px]'>
      <h2 className='text-[32px] text-black leadung-[130%]'>Content & PR Service</h2>
      <p className='text-[16px] text-gray w-[483px] leadung-[130%] mt-[24px]'>
      Consequat pharetra elit posuere fringilla luctus sit. Curabitur accumsan fermentum magna amet. Sed nec amet posuere tellus pellentesque vitae. Pulvinar nulla sem risus diam volutpat. Amet, sit aliquet magna in viverra at elit nullam.</p>
      <div className='w-[328px] flex justify-between mt-[48px]'>
        <button className='text-[14px] text-perple leadung-[44px]
        w-[144px] h-[44px] p-[0px_32px] border border-solid border-perple
        rounded-[4px]'>Learn more</button>
        <button className='text-[14px] text-white leadung-[44px]
        w-[166px] h-[44px] p-[0px_32px] border border-solid border-perple
        bg-perple rounded-[4px]'>Try SEO toolkit</button>
      </div>
    </div>
  </div>
  )
}

export default Content

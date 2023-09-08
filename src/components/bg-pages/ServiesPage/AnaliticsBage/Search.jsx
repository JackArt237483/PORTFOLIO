import React from 'react'
import card from "../../../../assets/Analitics/illustration (7).png"

function Search() {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between items-center'>
      <img src={card} alt="card" />
      <div className='w-[590px]'>
        <b className='text-[32px] text-black leadung-[130%]'>Search Engine Optimization</b>
        <p className='text-[16px] text-gray w-[483px] leadung-[130%] mt-[24px]'>Elementum ipsum lorem tortor morbi quis turpis pellentesque ultrices aenean. Lacus sit viverra et egestas nisl vitae lacus, eget. Eu pulvinar duis in posuere non adipiscing. Nunc, tristique viverra tincidunt nec proin tempus egestas massa. Quis velit nunc nisl sem in tristique.</p>
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

export default Search

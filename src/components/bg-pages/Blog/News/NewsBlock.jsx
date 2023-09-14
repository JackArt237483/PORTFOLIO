import React from 'react'
import onenews from "../../../../assets/PagesImage/News/onenews.png"
import twonews from "../../../../assets/PagesImage/News/twonews.png"
import clock from "../../../../assets/PagesImage/News/Clock.svg"
import person from "../../../../assets/PagesImage/News/Person.svg"
import right from "../../../../assets/PagesImage/HomeSvg/Left.svg"

const news = [
  {
    img: onenews,
    cast: "SEO",
    data: "July 5, 2020",
    who: "By Diane Mccoy",
    title: "How to Maximize Your ROI Through Scientific SEM?"
  },
  {
    img: twonews,
    cast: "Marketing",
    data: "July 6, 2023",
    who: "By Artem Kharchenko",
    title: "The Basics of Blogging Search Engine Optimization.",
  },
]

function NewsBlock() {
  return (
  <div>

    <div className='w-[1230px] mx-auto flex justify-between mt-[100px]'>
      {news.map((obj,index)=>(
        <div key={index} className='w-[600px] h-[477px]'>
          <img
          className='w-[600px] h-[360px]'
          src={obj.img} alt="img" />
          <div className='text-start'>
             <ul className='w-[380px] mt-[16px] flex justify-between items-center'>
               <li className='flex items-center'>
                 <p className='text-gray text-[14px] leading-[150%]'>{obj.cast}</p>
                 <div className='w-[1px] h-[12px] ml-[12px] bg-gray'></div>
               </li>
               <li className='flex ml-[12px]'>
                 <img src={clock} alt="clock"/>
                 <p className='text-gray text-[14px] leading-[150%] ml-[8px]'>{obj.data}</p>
               </li>
               <li className='flex items-center'>
                  <div className='w-[1px] h-[12px] ml-[12px] bg-gray'></div>
                  <img className='ml-[12px]' src={person} alt="person"/>
                  <p className='ml-[8px] text-gray text-[14px] leading-[150%]'>{obj.who}</p>
               </li>
             </ul>
          </div>
            <h3 className='text-black text-start text-[20px] leading-[150%] mt-[8px]'>{obj.title}</h3>
          <div className='w-[110px] justify-between flex items-center mt-[16px]'>
             <b className='text-black text-start text-[16px] leading-[160%]'>Read more</b>
             <img src={right} alt="left" />
          </div>
        </div>))}
    </div>
    <div className='w-[1230px] h-[3px] bg-[#e5e8ed] mx-auto mt-[40px]'></div>
  </div>
  )
}

export default NewsBlock

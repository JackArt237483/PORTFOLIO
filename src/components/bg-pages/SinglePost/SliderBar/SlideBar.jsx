import React from 'react'
import image1 from "../../../../assets/newsimage/image (56).png"
import image2 from "../../../../assets/newsimage/image (57).png"
import image3 from "../../../../assets/newsimage/image (58).png"
import clock from "../../../../assets/PagesImage/News/Clock.svg"
import search from "../../../../assets/SinglePageImg/search.svg"
import person from "../../../../assets/SinglePageImg/image (63).png"
import facebook from "../../../../assets/SinglePageImg/Facebook (1).svg"
import twitter from "../../../../assets/SinglePageImg/Twitter (1).svg"
import linked from "../../../../assets/SinglePageImg/Linked-In (1).svg"

const news = [
  {
   img:image1,
   time: "July 5, 2023",
   title: "5 Surprising Ways to Combine Content Marketing with PPC"
  },
  {
    img:image2,
    time: "April 9, 2023",
    title: "Why SEO Is All About Content Marketing?"
   },
   {
    img:image3,
    time: "March 12, 2023",
    title: "10 tips for a small business digital marketing strategy"
   }
]

function SideBar() {
  return (
    <div className='w-[342px] h-[905px]'>
      <div className='w-[342px] h-[251px]'>
        <div className='relative'>
          <input
          className='w-[342px] h-[44px] bg-[#f4f5f6] border border-solid
          text-gray text-[14px] leading-[21px] pl-[16px] rounded'
          placeholder='Search the blog'
          type="text"/>
          <img
          className='absolute top-[12px] right-[16px]'
          src={search} alt="search" />
        </div>
        <div className='mt-[60px] w-[276px] h-[171px]'>
        <div
         className='w-[276px] h-[100px] mt-[24px] flex justify-between items-center'>
         <img src={person} alt="img" />
         <div className='w-[222px]'>
           <div className='w-[222px] ml-[12px]'>
              <b className='text-black text-[20px] leading-[150%]'>Diane Mccoy</b>
              <p className='text-gray text-[14px] leading-[150%]'>Leading Difital PR Strategist</p>
           </div>
           <div className='w-[84px] mt-[20px] ml-[12px] flex justify-between'>
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={linked} alt="lenked" />
            </div>
         </div>
      </div>
        </div>
        <div className='w-[342px] h-[403px]'>
        <h6 className='text-black text-[24px] leading-[130%] pb-[24px]'>
        Now Trending</h6>
        {news.map((obj,index)=> (
         <div
         key={index}
         className='w-[342px] h-[100px] mt-[24px] flex justify-between items-center'>
         <img src={obj.img} alt="img" />
         <div className='w-[222px]'>
           <div className='w-[222px] flex'>
              <img src={clock} alt="clock" />
              <p className='ml-[8px] text-gray text-[14px] leading-[150%]'>{obj.time}</p>
           </div>
           <b className='text-black text-[16px] leading-[160%]'>{obj.title}</b>
         </div>
      </div>
        ))}
        </div>
        <div className='w-[311px] mt-[60px] text-start'>
        <h6 className='text-black text-[24px] leading-[130%] pb-[24px]'>Tags</h6>
        <ul className='flex w-[341px] h-[82px] content-between flex-wrap justify-between'>
          <li className='w-[109px] border border-solid border-[#d7dadd]
          rounded-[4px] text-[14px] text-center hover:bg-perple hover:text-white
          leading-[21px] text-gray p-[5.5px_16px]'>
            #tips&tricks</li>
          <li className='w-[93px] border border-solid border-[#d7dadd]
          rounded-[4px] text-[14px] text-center hover:bg-perple hover:text-white
          leading-[21px] text-gray p-[5.5px_16px]'>#strategy</li>
          <li className='w-[109px] border border-solid border-[#d7dadd]
          rounded-[4px] text-[14px] text-center hover:bg-perple hover:text-white
          leading-[21px] text-gray p-[5.5px_16px]'>#SMM</li>
          <li className='w-[109px] border border-solid border-[#d7dadd]
          rounded-[4px] text-[14px] text-center hover:bg-perple hover:text-white
          leading-[21px] text-gray p-[5.5px_16px]'>#business</li>
          <li className='w-[94px] border border-solid border-[#d7dadd]
          rounded-[4px] text-[14px] text-center hover:bg-perple hover:text-white
          leading-[21px] text-gray p-[5.5px_16px]'>#PPC</li>
          <li className='w-[98px] border border-solid border-[#d7dadd]
          rounded-[4px] text-[14px] text-center hover:bg-perple hover:text-white
          leading-[21px] text-gray p-[5.5px_16px]'>#targeting</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar


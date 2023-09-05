import React from 'react'
import Header from '../../Base/Header/Header'
import ilistration from "../../../assets/PagesImage/HomeSvg/illustration.png"
import playvideo from "../../../assets/PagesImage/HomeSvg/PLayVideo.svg"
import chart from "../../../assets/PagesImage/HomeSvg/ic-speaker.svg"
import computer from "../../../assets/PagesImage/HomeSvg/ic-computer.svg"
import speaker from "../../../assets/PagesImage/HomeSvg/ic-chart.svg"

function FirstPageBack() {
  return (
      <div className='bg-image bg-center bg-no-repeat'>
         <Header/>
        <div className='w-[1230px] mx-auto flex justify-between mt-[200px]'>
          <div className='w-[810px]'>
             <h1 className='text-[72px] leading-[130%] text-white text-start
             tracking-[1px]'>
              Best <span className='text-[#7742f1]
              text-[72px] leading-[130%] tracking-[1px]'>SEO & Marketing
              </span>Solutions for You</h1>
             <div className='w-[400px] items-center flex justify-between mt-[44px]'>
               <button className='w-[220px] h-[52px] rounded-[4px]
               border border-solid border-white text-white
               text-[16px] leading-[52px]'>
               Get a free analysis</button>
               <div className='flex items-center w-[158px]'>
                 <img src={playvideo} alt="playvideo" />
                 <p className='text-[16px] leading-[25.6px] text-white'>Play video</p>
               </div>
             </div>
          </div>
          <img src={ilistration} alt="ilistration" />
        </div>
        <div className='w-[1230px] mx-auto mt-[129px] pb-[85px]'>
          <ul className='flex justify-between items-center'>
            <li className='flex items-center w-[256px] justify-center' >
              <img src={chart} alt="chart" />
              <p className='text-[20px] leading-[30px]
              text-white ml-[20px]'>SEO Content Strategy</p>
            </li>
            <div className='w-[1px] h-[40px] opacity-[0.4] bg-slate-500'></div>
            <li className='flex items-center w-[231px] justify-center'>
              <img src={computer} alt="chart" />
              <p className='text-[20px] leading-[30px]
              text-white ml-[20px]'>Content Marketing</p>
            </li>
            <div  className='w-[1px] h-[40px] opacity-[0.4] bg-slate-500'></div>
            <li className='flex items-center w-[368px] justify-center'>
              <img src={speaker} alt="speaker" />
              <p className='text-[20px] leading-[30px]
              text-white ml-[20px]'>Website & Social Media Marketing</p>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default FirstPageBack

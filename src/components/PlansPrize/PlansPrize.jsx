import React from 'react'
import checkgreen from "../../assets/SVG/CHECK.svg"
import check from "../../assets/SVG/CHECK.svg"
import cross from "../../assets/SVG/Cross.svg"

const datacheck = [
  {img: check, title: "Advanced Analytics"},
  {img: check, title: "Change Management"},
  {img: check, title: "Corporate Finance"},
  {img: check, title: "One Way Link Building"},
  {img: check, title: "Social Media Marketing"},
  {img: cross, title: "Strategy & Marketing"},
  {img: cross, title: "Information Technology"}
]

const datachecktwo = [
  {img: checkgreen, title: "Advanced Analytics"},
  {img: checkgreen, title: "Change Management"},
  {img: checkgreen, title: "Corporate Finance"},
  {img: checkgreen, title: "One Way Link Building"},
  {img: checkgreen, title: "Social Media Marketing"},
  {img: checkgreen, title: "Strategy & Marketing"},
  {img: cross, title: "Information Technology"}
]

const datacheckthree = [
  {img: check, title: "Advanced Analytics"},
  {img: check, title: "Change Management"},
  {img: check, title: "Corporate Finance"},
  {img: check, title: "One Way Link Building"},
  {img: check, title: "Social Media Marketing"},
  {img: check, title: "Strategy & Marketing"},
  {img: check, title: "Information Technology"}
]

function PlansPrize() {
  return (
    <div className='w-[1230px] mx-auto mt-[180px]'>
       <h2 className='text-black text-[46px] leading-[130%]
       '>Flexible pricing plans</h2>
       <div className='w-[390px] mx-auto rounded-[40px] border border-solid border-perple mt-[60px]'>
         <ul className='flex text-perple text-[16px] leading-[25px]
          justify-between'>
           <li className='w-[300px] h-[46px] p-[10px_20px] hover:bg-perple
           hover:rounded-[40px] hover:text-white'
           >Monthly</li>
           <li className='w-[300px] h-[46px] p-[10px_20px] hover:bg-perple
           hover:rounded-[40px] hover:text-white'>Yearly
           <span className='w-[70px] text-[12px] leading-[18px]'>-12% Off</span></li>
         </ul>
       </div>
       <div className='flex justify-between mt-[60px]'>
         <div className='w-[390px] h-[536px] shadow-shadow-card rounded-[4px]
         border border-solid border-[#10111098]'>
            <div className='flex items-center flex-col'>
              <h4 className='text-[28px] leading-[42px] mt-[40px]'>Basic</h4>
              <div className='flex w-[136px] justify-center text-perple mt-[8px]'>
                <h2 className='text-[28px] leading-[42px]'>$24</h2>
                <p className='text-[20px] leading-[30px] text-center'>/mon</p>
              </div>
            </div>
            <div className='bg-line h-[1px] w-[390px] mt-[16px] mb-[24px]'></div>
           {datacheck.map((obj,index)=>(
           <ul
           className='w-[200px] mx-auto mt-[12px]'
           key={index}>
             <li className='flex'>
               <img src={obj.img} alt="img" />
               <b className='text-[16px] leading-[25px] text-black ml-[2px]'>{obj.title}</b>
             </li>
           </ul>))}
           <button className='w-[146px] h-[44px] border border-perple border-solid
           text-perple mt-[32px] leading-[44px] text-[16px] mx-auto rounded-[4px]'>Choose plan</button>
         </div>
         <div className='w-[390px] h-[536px] shadow-shadow-card rounded-[4px] bg-black
         border border-solid border-[#03CEA4]'>
            <div className='flex items-center flex-col'>
              <h4 className='text-[28px] leading-[42px] mt-[40px] text-white'>Optimal</h4>
              <div className='flex w-[136px] justify-center text-perple mt-[8px]'>
                <h2 className='text-[28px] leading-[42px] text-[#03CEA4]'>$64</h2>
                <p className='text-[20px] leading-[30px] text-center text-[#03CEA4]'>/mon</p>
              </div>
            </div>
            <div className='bg-line h-[1px] w-[390px] mt-[16px] mb-[24px]'></div>
           {datachecktwo.map((obj,index)=>(
           <ul
           className='w-[200px] mx-auto mt-[12px]'
           key={index}>
             <li className='flex'>
               <img src={obj.img} alt="img" />
               <b className='text-[16px] leading-[25px] text-white ml-[2px]'>{obj.title}</b>
             </li>
           </ul>))}
           <button className='w-[146px] h-[44px] border border-perple border-solid
           text-white mt-[32px] leading-[44px] bg-perple text-[16px] mx-auto rounded-[4px]'>
            Choose plan</button>
         </div>
         <div className='w-[390px] h-[536px] shadow-shadow-card rounded-[4px]
         border border-solid border-[#10111098]'>
            <div className='flex items-center flex-col'>
              <h4 className='text-[28px] leading-[42px] mt-[40px]'>Premium</h4>
              <div className='flex w-[136px] justify-center text-perple mt-[8px]'>
                <h2 className='text-[28px] leading-[42px]'>$98</h2>
                <p className='text-[20px] leading-[30px] text-center'>/mon</p>
              </div>
            </div>
            <div className='bg-line h-[1px] w-[390px] mt-[16px] mb-[24px]'></div>
           {datacheckthree.map((obj,index)=>(
           <ul
           className='w-[200px] mx-auto mt-[12px]'
           key={index}>
             <li className='flex'>
               <img src={obj.img} alt="img" />
               <b className='text-[16px] leading-[25px] text-black ml-[2px]'>{obj.title}</b>
             </li>
           </ul>))}
           <button className='w-[146px] h-[44px] border border-perple border-solid
           text-perple mt-[32px] leading-[44px] text-[16px] mx-auto rounded-[4px]'>Choose plan</button>
         </div>
       </div>
    </div>
  )
}

export default PlansPrize

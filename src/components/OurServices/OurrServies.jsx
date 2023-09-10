import React from 'react'
import check from "../../assets/SVG/CHECK.svg"
import info_servies from "../../assets/background/Seo-sevies.png"

const datatext = [
  {title: "Aenean enim tellus morbi nisl vulputate dictumst."},
  {title: "Nibh sapien volutpat lacus augue."},
  {title: "Vel in amet, placerat adipiscing est pharetra."},
  {title: "Gravida ornare sit in et ut sit sem id."},
  {title: "Ultrices pellentesque dictum enim egestas ac diam."},
  {title: "Sit semper enim senectus integer ut turpis et."}
]

function OurrServies() {
  return (
    <div className='w-[1230px] mx-auto mt-[180px]'>
       <h3 className='text-[46px] text-[#1E212C]
       leading-[59px] text-center'>
        Our services</h3>
       <div className='mt-[40px]'>
         <ul className='flex justify-between
         text-[16px] text-[#9a9Ca5]'>
           <li className='w-[246px] h-[46px] text-center pt-[10px] hover:border-[#7772f1]
           hover:border-solid hover:rounded-[4px] hover:border hover:text-[#7772f1]'>
            Social Media</li>
           <li className='w-[246px] h-[46px] text-center pt-[10px] hover:border-[#7772f1]
           hover:border-solid hover:rounded-[4px] hover:border hover:text-[#7772f1]'>
            SEO</li>
           <li className='w-[246px] h-[46px] text-center pt-[10px] hover:border-[#7772f1]
           hover:border-solid hover:rounded-[4px] hover:border hover:text-[#7772f1]'>
            Research</li>
           <li className='w-[246px] h-[46px] text-center pt-[10px] hover:border-[#7772f1]
           hover:border-solid hover:rounded-[4px] hover:border hover:text-[#7772f1]'>
            Content & PR</li>
           <li className='w-[246px] h-[46px] text-center pt-[10px] hover:border-[#7772f1]
           hover:border-solid hover:rounded-[4px] hover:border hover:text-[#7772f1]'>
            Payed Traffic</li>
         </ul>
       </div>
       <div className='mt-[60px] w-[1230px] flex justify-between items-center'>
         <div className='w-[390px] text-start'>
            <h2 className='text-[28px] text-[#1e212c] leading-[42px]
            '>Complete Worflow For Any SEO Professional</h2>
            <ul className='mt-[24px]'>
              <li>
                 {datatext.map((text,index)=>(
                   <div className='flex items-center mt-[12px]'
                   key={index}><img src={check} alt="chack" />
                   <p className='text-[16px] ml-[12px]
                   leading-[25.6px] text-[#424551]'>
                     {text.title}
                   </p></div>
                 ))}
              </li>
            </ul>
            <div className='flex justify-between w-[350px] mt-[48px]'>
              <button className='w-[140px] h-[44px]
              text-[#7772f1] text-[14px] leading-[14px] rounded-[4px]
              border border-solid border-[#7772f1] pt-[0px_32px]'>
              Learn more</button>
              <button  className='w-[166px] h-[44px]
              text-white text-[14px] leading-[14px]
              bg-[#7772f1] pt-[0px_32px] rounded-[4px]'>
                Try SEO toolkit</button>
            </div>
         </div>
         <img src={info_servies} alt="seo" />
       </div>
    </div>
  )
}

export default OurrServies

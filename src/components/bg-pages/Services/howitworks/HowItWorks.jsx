import React from 'react'
import Line from "../../../../assets/Analitics/LINE.png"

function HowItWorks() {
  return (
    <div className='w-[1230px] mx-auto mt-[120px]'>
       <h2 className='text-[46px] leading-[130%] text-black text-center'>
        That’s how it works</h2>
       <div className='w-[810px] mx-auto flex justify-between mt-[65px]'>
         <div className='mt-[180px]'>
           <div className='w-[368px] h-[162px] text-end'>
             <h6 className='text-[12px] text-gray leading-[150%]'>STEP 2</h6>
             <b className='text-[20px] text-black leading-[150%]'>Technical SEO Optimizations</b>
             <p className='text-[16px] text-gray leading-[160%]'>
              Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. Nunc nisl orci auctor et fames. Vestibulum viverra faucibus faucibus et convallis.</p>
           </div>
           <div className='w-[362px] h-[162px] text-end mt-[162px]'>
             <h6 className='text-[12px] text-gray leading-[150%]'>STEP 4</h6>
             <b className='text-[20px] text-black leading-[150%]'>
             Content Marketing</b>
             <p className='text-[16px] text-gray leading-[160%]'>
             Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor. Faucibus in leo, nulla odio nulla imperdiet quis faucibus neque.</p>
           </div>
         </div>
         <img src={Line} alt="line"/>
         <div>
         <div>
           <div className='w-[362px] h-[162px] text-tstart'>
             <h6 className='text-[12px] text-gray leading-[150%]'>STEP 1</h6>
             <b className='text-[20px] text-black leading-[150%]'>
             Off-Site SEO Analysis</b>
             <p className='text-[16px] text-gray leading-[160%]'>
             Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.</p>
           </div>
           <div className='w-[362px] h-[162px] text-start mt-[162px]'>
             <h6 className='text-[12px] text-gray leading-[150%]'>STEP 3</h6>
             <b className='text-[20px] text-black leading-[150%]'>
             Usability Check</b>
             <p className='text-[16px] text-gray leading-[160%]'>
             Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. Varius praesent pretium in leo, accumsan, in ultricies. </p>
           </div>
         </div>
         </div>
       </div>
    </div>
  )
}

export default HowItWorks

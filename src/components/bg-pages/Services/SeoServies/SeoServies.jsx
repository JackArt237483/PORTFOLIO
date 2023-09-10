import React from 'react'
import one from "../../../../assets/PagesImage/Services/ic-options.png"
import two from "../../../../assets/PagesImage/Services/ic-analytics.png"
import three from "../../../../assets/PagesImage/Services/ic-target.png"
import fore from "../../../../assets/PagesImage/Services/ic-chart.png"
import five from "../../../../assets/PagesImage/Services/ic-speaker.png"
import six from "../../../../assets/PagesImage/Services/ic-analysis.png"


function SeoServies() {
  return (
    <div className='w-[1230px] mx-auto mt-[180px]'>
      <h1 className='text-black leading-[130%] text-[46px] text-center'>
        SEO services include</h1>
      <div className='mt-[60px] w-[1230px] mx-auto
      flex justify-between flex-wrap h-[420px] content-between'>
         <div className='flex justify-between items-start w-[1230px]'>
            <div  className='w-[285px] text-start'>
               <img src={one} alt="img" />
               <h3 className='text-[20px] text-black leading-[30px] mt-[24px]'>
               SEO Strategy</h3>
               <p className='text-[16px] text-gray leading-[25.6px] mt-[6px]'>
               Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
            </div>
           <div className='w-[1px] h-[223px] bg-line'></div>
            <div  className='w-[285px] text-start'>
                <img src={two} alt="img" />
                <h3 className='text-[20px] text-black leading-[30px] mt-[24px]'>
                Competitor Analysis</h3>
                <p className='text-[16px] text-gray leading-[25.6px] mt-[6px]'>
                Nulla id egestas accumsan consequat tincidunt. Urna nisi, nec sed massa pharetra duis ut porttitor.</p>
            </div>
            <div className='w-[1px] h-[223px] bg-line'></div>
            <div  className='w-[285px] text-start'>
               <img src={three} alt="img" />
               <h3 className='text-[20px] text-black leading-[30px] mt-[24px]'>
               Technical Audit</h3>
               <p className='text-[16px] text-gray leading-[25.6px] mt-[6px]'>
               Congue viverra in quis urna lectus proin massa. Aliquam, justo nisl sed diam nibh vehicula.</p>
            </div>
          </div>
        <div className='w-[1230px] h-[1px] bg-line'></div>
          <div className='flex justify-between items-end w-[1230px]'>
            <div  className='w-[285px] text-start'>
               <img src={fore} alt="img" />
               <h3 className='text-[20px] text-black leading-[30px] mt-[24px]'>
               Content Strategy</h3>
               <p className='text-[16px] text-gray leading-[25.6px] mt-[6px]'>
               Posuere sed quam etiam semper id id euismod. Feugiat cras donec elementum interdum in.</p>
            </div>
           <div className='w-[1px] h-[223px] bg-line'></div>
            <div  className='w-[285px] text-start'>
                <img src={five} alt="img" />
                <h3 className='text-[20px] text-black leading-[30px] mt-[24px]'>
                Media Promotion</h3>
                <p className='text-[16px] text-gray leading-[25.6px] mt-[6px]'>
                Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.</p>
            </div>
            <div className='w-[1px] h-[223px] bg-line'></div>
            <div  className='w-[285px] text-start'>
               <img src={six} alt="img" />
               <h3 className='text-[20px] text-black leading-[30px] mt-[24px]'>
               SEO Reports</h3>
               <p className='text-[16px] text-gray leading-[25.6px] mt-[6px]'>
               Congue phasellus est, amet sem bibendum sollicitudin arcu scelerisque senectus. Mauris, mus tincidunt a, nisi.</p>
            </div>
           </div>
          </div>
      </div>
  )
}

export default SeoServies

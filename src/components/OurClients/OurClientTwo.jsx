import React from 'react'
import arrow from "../../assets/PagesImage/HomeSvg/Left.svg"
import national from "../../assets/PagesImage/TopCompany/naTIONAL.png"
import health from "../../assets/PagesImage/TopCompany/National Health Logo 1.png"
import sunset from "../../assets/PagesImage/TopCompany/Sunset Realty Logo.png"

function OurCleintTwo() {
  return (
    <div className='max-w-[1920px] h-[782px] mt-[120px] mx-auto bg-[#F4F5F6]'>
      <div className="w-[1230px] mx-auto">
           <h3 className='text-black text-[46px] leading-[130%] text-center pt-[80px]'>
            Read case studies</h3>
        <div className='mt-[60px] flex justify-between items-center'>
          <div className='w-[390px] h-[380px] bg-white pl-[31px]
          border border-solid border-[#e5e8ed] rounded-[4px] shadow-shadow-card'>
             <div className='pt-[24px]'>
               <img src={national} alt="national"/>
               <p className='text-black text-[14px] leading-[21px] text-start'>
                Charity organisation</p>
             </div>
             <div className='h-[1px] bg-slate-300 mt-[20px]'></div>
             <h6 className='w-[310px] text-gray text-[16px] leading-[160%] text-start mt-[20px]'>
              Createx SEO Agency helped National Inc. increase their MQL to SQL
              conversion rate by 300%.</h6>
             <div className='flex w-[310px] justify-between mt-[71px]'>
                <div className='w-[118px] h-[48px] flex justify-between items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <g clipPath="url(#clip0_5129_3015)">
                      <circle opacity="0.3" cx="20" cy="20" r="18" stroke="#F89828" strokeWidth="4"/>
                      <path d="M20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4V0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 14.2928 2.39055 9.14386 6.22496 5.5L8.72317 8.64953C5.80608 11.5478 4 15.563 4 20C4 28.8366 11.1634 36 20 36Z" fill="#F89828"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_5129_3015">
                        <rect width="40" height="40" fill="white"/>
                      </clipPath>
                    </defs>
                </svg>
                <div>
                    <h5 className='text-black text-[20px] leading-[30px]'>90%</h5>
                    <p className='text-black text-[12px] leading-[18px]'>Engagement</p>
                </div>
                </div>
                <div className='w-[118px] h-[48px] flex justify-between items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <g clipPath="url(#clip0_5129_3022)">
                    <circle cx="20" cy="20" r="18" stroke="#03CEA4" strokeWidth="4"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_5129_3022">
                      <rect width="40" height="40" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <div>
                    <h5 className='text-black text-[20px] leading-[30px]'>100%</h5>
                    <p className='text-black text-[12px] leading-[18px]'>Deliverability</p>
                </div>
                </div>
             </div>
          </div>
          <div className='w-[390px] h-[380px] bg-cardbg bg-no-repeat bg-cover
          pl-[31px] opacity-[1] border border-solid border-[#e5e8ed] rounded-[4px] shadow-shadow-card'>
             <div className='pt-[24px]'>
               <img src={health} alt="national"/>
               <p className='text-white text-[14px] leading-[21px] text-start'>
               Oil and natural resources</p>
             </div>
             <div className='h-[1px] bg-slate-300 mt-[20px]'></div>
             <h6 className='w-[310px] text-white text-[16px] leading-[160%] text-start mt-[20px]'>
             With an advanced A/B testing and usability analysis, Createx SEO Agency helps Del Mar see a 400% increase in conversion rate..</h6>
             <div className='flex w-[310px] justify-between mt-[71px] text-start'>
                <div className='w-[133px] h-[48px] flex justify-between items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <g clipPath="url(#clip0_5129_2977)">
                    <circle cx="20" cy="20" r="18" stroke="#5A87FC" strokeWidth="4"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_5129_2977">
                      <rect width="40" height="40" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <div>
                    <h5 className='text-white text-[20px] leading-[30px]'>200%</h5>
                    <p className='text-white text-[12px] leading-[18px]'>Growth in sales</p>
                </div>
                </div>
                <div className='w-[118px] h-[48px] ml-[12px]'>
                    <h5 className='text-white text-[20px] leading-[30px]'>1,400</h5>
                    <p className='text-white text-[12px] leading-[18px]'>Target investors</p>
                </div>
             </div>
          </div>
          {/* <div className='bg-black rounded-[4px] opacity-[0.6] w-[390px] h-[390px] absolute'></div> */}
          <div className='w-[390px] h-[380px] bg-white pl-[31px]
          border border-solid border-[#e5e8ed] rounded-[4px] shadow-shadow-card'>
             <div className='pt-[24px]'>
               <img src={sunset} alt="sunset"/>
               <p className='text-black text-[14px] leading-[21px] text-start'>
               Personal care</p>
             </div>
             <div className='h-[1px] bg-slate-300 mt-[20px]'></div>
             <h6 className='w-[310px] text-gray text-[16px] leading-[160%] text-start mt-[20px]'>
             We helped Sunset company break through a noisy industry and better understand their buyer's journey.</h6>
             <div className='flex w-[310px] justify-between mt-[71px] text-start'>
                <div className='w-[109px] h-[48px] flex justify-between items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <g clipPath="url(#clip0_5129_1805)">
                    <circle opacity="0.3" cx="20" cy="20" r="18" stroke="#F52F6E" strokeWidth="4"/>
                    <path d="M20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4V0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 14.2928 2.39055 9.14386 6.22496 5.5L8.72317 8.64953C5.80608 11.5478 4 15.563 4 20C4 28.8366 11.1634 36 20 36Z" fill="#F52F6E"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_5129_1805">
                      <rect width="40" height="40" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <div>
                    <h5 className='text-black text-[20px] leading-[30px]'>70%</h5>
                    <p className='text-black text-[12px] leading-[18px]'>Open Rate</p>
                </div>
                </div>
                <div className='w-[133px] h-[48px] flex justify-between items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <g clipPath="url(#clip0_5129_1812)">
                    <circle cx="20" cy="20" r="18" stroke="#F89828" strokeWidth="4"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_5129_1812">
                      <rect width="40" height="40" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <div>
                    <h5 className='text-black text-[20px] leading-[30px]'>200%</h5>
                    <p className='text-black text-[12px] leading-[18px]'>Growth in sales</p>
                </div>
                </div>
             </div>
          </div>
        </div>
        <div className='w-[601px] mx-auto mt-[60px] flex justify-between'>
          <h2 className='text-[28px] text-black leading-[42px]'>
            Explore more case studies</h2>
          <button className='w-[237px] h-[52px] bg-perple rounded-[4px]
          p-[0px_40px] text-[16px] text-white leading-[53px]'>
          View all case studies
          </button>
        </div>
        </div>
      </div>
  )
}

export default OurCleintTwo
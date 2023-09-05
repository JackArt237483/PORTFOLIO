import React from 'react'
import companyone from "../../../assets/PagesImage/TopCompany/companyone.png"
import companytwo from "../../../assets/PagesImage/TopCompany/companytwo.png"
import companythree from "../../../assets/PagesImage/TopCompany/companythree.png"
import companyfor from "../../../assets/PagesImage/TopCompany/companyfor.png"

function TopCompany() {
  return (
    <div className='w-[1230px] mx-auto mt-[120px]'>
      <div className="flex justify-between">
        <h5 className='text-[28px] leading-[42px] text-black w-[630px] text-start'>
          Createx SEO Agency is a full-service
           digital marketing agency. We help businesses
            make more money through a wealth of 
            performance data and market research.
             We create science-based SEO strategies
            to empower our clients.</h5>
          <div className='w-[495px] h-[182px] flex flex-wrap'>
            <ul className='contents'>
              <li className='flex justify-center items-center'>
                <img src={companyone} alt="one" />
                <p className='text-[14px] text-[#424551] leading-[21px]
                w-[136px] text-start ml-[16px]'>
                  Top SEO Companies 2020 by Clutch</p>
              </li>
              <li className='flex justify-center items-center'>
                <img src={companytwo} alt="two" />
                <p className='text-[14px] text-[#424551] leading-[21px]
                w-[136px] text-start ml-[16px]'>
                  Top Digital Marketing Agency 2019 by UpCity</p>
              </li>
              <li className='flex justify-center items-center'>
                <img src={companythree} alt="three" />
                <p className='text-[14px] text-[#424551] leading-[21px]
                w-[136px] text-start ml-[16px]'>
                  Official Member 2020 by Forbes Agency Council</p>
              </li>
              <li className='flex justify-center items-center'>
                <img src={companyfor} alt="for" />
                <p className='text-[14px] text-[#424551] leading-[21px]
                w-[136px] text-start ml-[16px]'>
                  Top SEO Companies 2020 by Top Developers</p>
              </li>
            </ul>
          </div>
       </div>
    </div>
  )
}

export default TopCompany

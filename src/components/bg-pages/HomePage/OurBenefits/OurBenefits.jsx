import React from 'react'
import speaker from "../../../../assets/PagesImage/HomeSvg/ic-speaker.svg"
import target from "../../../../assets/PagesImage/HomeSvg/ic-target.png"
import checklist from "../../../../assets/PagesImage/HomeSvg/checklist.svg"
import chat from "../../../../assets/PagesImage/HomeSvg/ic-chat.png"
import glass from "../../../../assets/PagesImage/HomeSvg/glass.png"
import oks from "../../../../assets/PagesImage/HomeSvg/ic-like.png"
import back from "../../../../assets/background/backgroundfor.png"

const dataone = [
  {img: speaker, title: 'Social Advertising Experts',info: 'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.'},
  {img: target, title: 'ROI Focused Campaigns',info: 'Cursus sit eu viverra suspendisse eu quisque enim est tortor. Mauris ornare convallis nisi diam imperdiet. '},
  {img: checklist, title: 'Monthly Reporting',info: 'Aenean urna dictum adipiscing nec, cras quisque. Nunc in odio ultricies ornare ornare nunc venenatis mauris. '}
]

const datatwo = [
  {img: chat, title: 'Quality Customer Service',info: 'Sed nunc scelerisque ipsum accumsan, proin nunc euismod purus. Dictum tortor, pellentesque vel integer amet.'},
  {img: glass, title: 'Complete SEO Transparency',info: 'Culpa nostrud commodo ea consequat aliquip reprehenderit. Ve niam velit nostrud aliquip sunt.'},
  {img: oks, title: 'We re a True Partner',info: 'Quis sed malesuada tincidunt amet, vitae mi justo elementum eu. Dui gravida id elementum dolor sed elementum, risus. '}
]

function OurBenefits() {
  return (
    <div className='w-[1230px] mx-auto mt-[100px]'>
        <h2 className='text-black text-[46px]
        leading-[130%]'>Our benefits</h2>
      <div className='w-[1230px] mt-[60px] flex justify-between items-center'>
        <div>
        {dataone.map((obj,index)=>(
          <div key={index} className='w-[390px] shadow-shadow-card h-[237px] border
          border-solid border-[#e5e8ed] rounded-[4px] mt-[24px] pt-[40px]'>
          <div className='h-[157px]'>
            <img className='mx-auto' src={obj.img} alt="img"/>
            <h5 className='text-black text-[20px] leading-[30px] mt-[16px]'>{obj.title}</h5>
            <p className='text-gray text-[14px] leading-[21px] h-[63px] mt-[5px]'>{obj.info}</p>
          </div>
        </div>))}
        </div>
        <div><img src={back} alt="back" /></div>
        <div>
        {datatwo.map((obj,index)=>(
          <div key={index} className='w-[390px] shadow-shadow-card h-[237px] border
          border-solid border-[#e5e8ed] rounded-[4px] mt-[24px] pt-[40px]'>
          <div className='h-[157px]'>
            <img className='mx-auto' src={obj.img} alt="img"/>
            <h5 className='text-black text-[20px] leading-[30px] mt-[16px]'>{obj.title}</h5>
            <p className='text-gray text-[14px] leading-[21px] h-[63px] mt-[5px]'>{obj.info}</p>
          </div>
        </div>))}
        </div>
     </div>
    </div>
  )
}

export default OurBenefits

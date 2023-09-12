import React from 'react'
import check from "../../../../assets/Analitics/check.svg"
import facebook from "../../../../assets/PagesImage/Footer/Facebook.svg"
import twitter from "../../../../assets/PagesImage/Footer/Twitter.svg"
import Linked from "../../../../assets/PagesImage/Footer/Linked-In.svg"

const text = [
   {img: check, text: 'Remarketing'},
   {img: check, text: 'Conversion Rate Optimization'},
   {img: check, text: 'User Testing'},
   {img: check, text: 'PPC Management'},
   {img: check, text: 'Usability Testing'}
]

const texter = [
  {title: '#SEO'},
  {title: '#research'},
  {title: '#payed_traffic'},
]

function Sidebar() {
  return (
    <div className='w-[390px] h-[678px]'>
      <div className='w-[390px] h-[520px] bg-[#f5f5f5] rounded-[4px]'>
        <div className='w-[326px] mx-[32px] py-[40px]'>
          <h4 className='text-black text-[24px] leading-[130%]'>About the client</h4>
          <p className='text-[#424551] text-[14px] mt-[12px] leading-[150%]'>
            At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum.</p>
          <h4 className='text-black text-[24px] mt-[24px] leading-[130%]'>Industry</h4>
          <p className='text-[#424551] text-[14px] mt-[12px] leading-[150%]'>
          Electric company - B2B</p>
          <h4 className='text-black text-[24px] mt-[24px] leading-[130%]'>Services rendered</h4>
          <ul className='mt-[12px]'>
           {text.map((obj,index)=> (
             <li key={index}
             className='flex justify-start items-end w-[214px]'>
               <img src={obj.img} alt="text"/>
               <p className='text-[#424551] text-[14px] mt-[8px] ml-[12px] leading-[150%]'>{obj.text}</p>
             </li>
           ))}
          </ul>
        </div>
      </div>
      <div className='mt-[46px]'>
         <ul className='w-[385px] flex justify-between'>
           {texter.map((obj,index)=> (
             <li
             key={index}
             className='min-w-[122px] first:w-[67px] border border-solid rounded-[4px] border-[#d7dadd]
             text-[14px] text-gray leading-[150%] hover:bg-perple hover:border-perple
             text-center hover:text-white p-[5.5px_16px]'
             >{obj.title}</li>))}
         </ul>
      </div>
      <div className='w-[153px] flex justify-between mt-[53px]'>
         <b>Share:</b>
         <div className='w-[84px] flex justify-between bg-black'>
           <img src={facebook} alt="facebook" />
           <img src={twitter} alt="twitter" />
           <img src={Linked} alt="linked" />
         </div>
      </div>
    </div>
  )
}

export default Sidebar

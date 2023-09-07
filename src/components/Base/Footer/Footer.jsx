import React from 'react'
import logo from '../../../assets/SVG/LOGO-HEADER.svg'
import facebook from "../../../assets/PagesImage/Footer/Facebook.svg"
import linked from "../../../assets/PagesImage/Footer/Linked-In.svg"
import twiter from "../../../assets/PagesImage/Footer/Twitter.svg"
import insta from "../../../assets/PagesImage/Footer/Instagram.svg"
import mail from "../../../assets/PagesImage/Footer/Mail.svg"
import iphone from "../../../assets/PagesImage/Footer/iPhone.svg"
import right from "../../../assets/PagesImage/Footer/Right.svg"
import one from "../../../assets/PagesImage/Footer/image (42).png"
import two from "../../../assets/PagesImage/Footer/image (43).png"
import three from "../../../assets/PagesImage/Footer/award.png"
import forr from "../../../assets/PagesImage/Footer/award.svg"
import up from "../../../assets/PagesImage/Footer/Up-chevron.svg"
import heart from "../../../assets/PagesImage/Footer/Heart.svg"

function Footer() {
  return (
    <>
    <div className='max-w-[1920px] mx-auto bg-black h-[507px] mt-[180px]'>
      <div className='w-[1230px] mx-auto flex justify-between pt-[80px]'>
        <div className='w-[281px] text-start'>
          <img src={logo} alt="logo"/>
          <p className='text-gray opacity-[0.6] text-[12px] mt-[24px] leading-[18px]'>
            Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.</p>
          <div className='flex justify-between w-[156px] mt-[38px]'>
             <img src={facebook} alt="facebook" />
             <img src={linked} alt="linked" />
             <img src={twiter} alt="twiter" />
             <img src={insta} alt="insta" />
          </div>
        </div>
        <div className='w-[100px] h-[198px]'>
          <ul className='text-[16px] text-gray leading-[160%] mt-[12px] text-start'>
            <li className="first:text-white first:leading-[150%]">COMPANY</li>
            <li>About Us</li>
            <li>Case Studies</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className='w-[100px] h-[198px]'>
          <ul className='text-[16px] text-gray leading-[160%] mt-[12px] text-start'>
            <li className="first:text-white first:leading-[150%]">SERVICES</li>
            <li>Social Media</li>
            <li>SEO</li>
            <li>Research</li>
            <li>Content & PR</li>
            <li>Payed Traffic</li>
          </ul>
        </div>
        <div className='w-[157px] h-[198px]'>
          <ul className='text-[16px] text-gray leading-[160%] mt-[12px] text-start'>
            <li className="first:text-white first:leading-[150%]">CONTACT US</li>
            <li className='flex'>
               <img src={iphone} alt="iphone"/>
               <p className='ml-[6px]'>(405) 555-0128</p>
            </li>
            <li className='flex'>
               <img src={mail} alt="mail"/>
               <p className='ml-[6px]'>hello@createx.com</p>
            </li>
          </ul>
        </div>
        <div className='w-[290px] h-[126px] text-start'>
          <b className='text-[16px] text-white leading-[160%]'>
            SIGN UP TO OUR NEWSLETTER</b>
          <div className='relative'>
          <input
           type="text"
           placeholder='Email address'
           className='text-[12px] opacity-[0.6] text-gray leading-[160%]
           border border-solid border-[#9c9b9b] bg-back  mt-[24px]
           rounded-[4px] w-[290px] p-[9px_12px]'/>
           <img
           className="absolute right-[7px] top-[36px]"
           src={right} alt="right" />
           </div>
          <p className='text-[10px] text-gray leading-[150%] mt-[12px]'>
          *Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
        </div>
      </div>
      <div className='max-w-[1920px] mt-[60px] bg-line h-[1px] opacity-[0.4]'></div>
      <div className='flex w-[1230px] pt-[40px] mx-auto justify-between'>
        <div className='w-[552px] flex justify-between'>
          <img src={one} alt="one" />
          <img src={two} alt="two" />
          <img src={three} alt="three" />
          <img src={forr} alt="forr" />
        </div>
        <div className='text-white text-[14px] w-[129px] flex justify-between
        items-center leading-[18px]'>
          <p>GO TO TOP</p>
          <div className='w-[40px] h-[40px] bg-perple rounded-md'>
          <img
          className='p-[9px]'
          src={up} alt="up" />
          </div>
        </div>
      </div>
      <div className='w-[1230px] mx-auto h-[50px] mt-[35px]'>
        <div>
           <ul className='text-white text-[12px] w-[285px] flex justify-between leading-[18px]'>
             <li>© All rights reserved.Made with</li>
             <li><img src={heart} alt="heart" /></li>
             <li>by Createx Studio </li>
           </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer

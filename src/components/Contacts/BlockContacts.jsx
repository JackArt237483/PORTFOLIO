import React from 'react'
import Header from "../../components/Base/Header/Header"
import home from "../../assets/ServiesImage/Home.svg"
import arrow from "../../assets/ServiesImage/Right-chevron.svg"
import location from "../../assets/Carres/location.svg"
import phone from "../../assets/Carres/iPhone (3).svg"
import chat from "../../assets/Carres/Chat (2).svg"
import clock from "../../assets/Carres/Clock (1).svg"
import { NavLink } from 'react-router-dom'

function BlockContacts() {
  return (
    <div className='bg-image7 bg-no-repeat bg-cover pb-[120px]'>
      <Header/>
      <div className='w-[302px] mx-auto mt-[80px] text-center'>
        <div className='w-[105px] flex justify-between items-center mx-auto'>
            <NavLink to='/'>
            <img src={home} alt="home" />
            </NavLink>
            <img src={arrow} alt="arrow" />
            <p className='text-white leading-[21px] text-[14px]'>
            Contacts</p>
        </div>
        <h1 className='mt-[42px] text-[72px] leading-[130%] text-white'>
        Contacts</h1>
      </div>
        <div className='w-[1229px] mt-[80px] mx-auto flex justify-between'>
          <div className='w-[230px] h-[99px] flex justify-between'>
            <img
            className='w-[40px] h-[40px]'
            src={location} alt="location"/>
            <div className='w-[180px]'>
              <p className='text-[14px] leading-[21px] text-white opacity-60'>
                Visit us</p>
              <h6 className='text-[16px] leading-[160%] text-white'>
                2464 Royal Ln. Mesa,
                New Jersey 45463, USA</h6>
              <span className='text-[16px] leading-[160%] text-perple'>
                See on the map</span>
            </div>
          </div>
          <div className='w-[1px] opacity-40 h-[99px] bg-line'></div>
          <div className='w-[178px] h-[73px] flex justify-between'>
            <img
            className='w-[40px] h-[40px]'
            src={phone} alt="location"/>
            <div className='w-[126px]'>
              <p className='text-[14px] leading-[21px] text-white opacity-60'>
              Call us</p>
              <h6 className='text-[16px] leading-[160%] text-white'>
              (405) 555-0128
              (603) 555-0123</h6>
            </div>
          </div>
          <div className='w-[1px] opacity-40 h-[99px] bg-line'></div>
          <div className='w-[203px] h-[73px] flex justify-between'>
            <img
            className='w-[40px] h-[40px]'
            src={chat} alt="chat"/>
            <div className='w-[151px]'>
              <p className='text-[14px] leading-[21px] text-white opacity-60'>
              Talk to us</p>
              <h6 className='text-[16px] leading-[160%] text-white'>
              hello@createx.com</h6>
            </div>
          </div>
          <div className='w-[1px] opacity-40 h-[99px] bg-line'></div>
          <div className='w-[216px] h-[73px] flex justify-between'>
            <img
            className='w-[40px] h-[40px]'
            src={clock} alt="clock"/>
            <div className='w-[152px]'>
              <p className='text-[14px] leading-[21px] text-white opacity-60'>
              Working Hours</p>
              <h6 className='text-[16px] leading-[160%] text-white'>
              Mon-Fri: 9 am — 6 pm Sat-Sun: days off</h6>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BlockContacts

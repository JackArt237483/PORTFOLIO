import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css';
import clock from "../../../../assets/PagesImage/News/Clock.svg"
import person from "../../../../assets/PagesImage/News/Person.svg"
import right from "../../../../assets/newsimage/Right.svg"
import imageone from "../../../../assets/newsimage/pic.png"
import imagetwo from "../../../../assets/newsimage/pi1c.png"
import imagethree from "../../../../assets/newsimage/pi2c.png"
import imagefor from "../../../../assets/newsimage/pi3c.png"
import imagefive from "../../../../assets/newsimage/pi4c.png"
import imagesix from "../../../../assets/newsimage/pi5c.png"
import './Style.css'

const news = [
  {
    img: imageone,
    cast: "Marketing",
    data: "July 5, 2022",
    who: "By Diane Mccoy",
    title: "Digital Marketing Game: What You Need to Know to Stay Ahead?",
    sentence: "Nunc nulla vestibulum nunc quam arcu tristique convallis. Posuere augue pellentesque mauris gravida..."
  },
  {
    img: imagetwo,
    cast: "Ad Tips",
    data: "July 6, 2023",
    who: "By Artem Kharchenko",
    title: "How to Evaluate and Compare Social Media Tools Today.",
    sentence: "Eu donec pellentesque et aliquet. Fringilla morbi etiam turpis nisl nunc, quis sagittis ut. Pulvinar amet vitae..."
  },
  {
    img: imagethree,
    cast: "SEO",
    data: "July 10, 2023",
    who: "By Shawn Edwards",
    title: "The Best Practices to Optimize Your Website for Mobile.",
    sentence: "Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida..."
  },
  {
    img: imagefor,
    cast: "Paid Search",
    data: "July 13, 2023",
    who: "Paid Search",
    title: "10 Seriously Underused Paid Search Strategies.",
    sentence: "Euismod congue faucibus diam etiam diam netus vitae ornare vitae. Cursus sollicitudin posuere venenatis..."
  },
  {
    img: imagefive,
    cast: "Media & Press",
    data: "July 5, 2020",
    who: "By Shawn Edwards",
    title: "How to Create Content That Gets Linked and Shared.",
    sentence: "Eu donec pellentesque et aliquet. Fringilla morbi etiam turpis nisl nunc, quis sagittis ut. Pulvinar amet vitae.."
  },
  {
    img: imagesix,
    cast: "Ad Tips",
    data: "July 1, 2023",
    who: "By Jane Cooper",
    title: "12 Simple Tips to Creating an Effective Ad.",
    sentence: "Imperdiet risus consectetur dignissim lorem sollicitudin eget bibendum pellentesque nec. Adipiscing viverra in non euismod. Amet nulla aliquam nulla magna..."
  },
]

function NewsPost() {
  return (
    <div className='w-[1230px] mx-auto relative mt-[150px]'>
      <Swiper
       modules={[Navigation]}
       slidesPerView={3}
       navigation={{
        nextEl: '.next-button-slide',
        prevEl: '.prev-button-slide'
       }}
       loop={true}
       className="!pt-[40px]">
          <div className='w-[1230px] flex justify-between'>
          {news.map((obj,index)=>(
            <SwiperSlide
            key={index} >
              <div className='w-[390px] h-[507px]'>
                <img
                className='w-[380px] h-[300px]'
                src={obj.img} alt="img" />
                <div className='text-start'>
                  <ul className='w-[380px] mt-[16px] flex justify-between items-center'>
                    <li className='flex items-center'>
                      <p className='text-gray text-[14px] leading-[150%]'>{obj.cast}</p>
                      <div className='w-[1px] h-[12px] ml-[12px] bg-gray'></div>
                    </li>
                    <li className='flex ml-[12px]'>
                      <img src={clock} alt="clock"/>
                      <p className='text-gray text-[14px] leading-[150%] ml-[8px]'>{obj.data}</p>
                    </li>
                    <li className='flex items-center'>
                        <div className='w-[1px] h-[12px] ml-[12px] bg-gray'></div>
                        <img className='ml-[12px]' src={person} alt="person"/>
                        <p className='ml-[8px] text-gray text-[14px] leading-[150%]'>{obj.who}</p>
                    </li>
                  </ul>
                </div>
                  <h3 className='text-black text-start text-[20px] leading-[150%] mt-[8px]'>{obj.title}</h3>
                  <p className='text-black text-start text-[16px] leading-[160%] mt-[8px]'>{obj.sentence}</p>
                <div className='w-[110px] justify-between flex items-center mt-[16px]'>
                  <b className='text-black text-start text-[16px] leading-[160%]'>Read more</b>
                  <img src={right} alt="left" />
                </div>
              </div>
              </SwiperSlide>))}
          </div>
     </Swiper>
     <div className='w-[1207px] flex justify-between absolute items-center top-[-80px]'>
      <h2 className='text-black text-[46px] leading-[130%]'>
        You may also like</h2>
          <div className='swiper-controller w-[120px]
          flex justify-between'>
              <div className='next-button-slide'></div>
              <div className='prev-button-slide'></div>
        </div>
     </div>
    </div>
  )
}

export default NewsPost

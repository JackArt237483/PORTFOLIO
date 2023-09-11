import React from 'react'
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css';
import person from "../../assets/PagesImage/swipercomment/person.svg"
import top  from "../../assets/PagesImage/swipercomment/backrond.png"
import braces from "../../assets/PagesImage/swipercomment/braces.svg"

const comments =[
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.',
    img: person,
    name: "Courtney Alexander",
    position: "Position, Company name",
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.',
    img: person,
    name: "Artem Alexander",
    position: "Position, Company",
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.',
    img: person,
    name: "Alexander Artem",
    position: "Position,name",
  }
]

function Commets() {
  return (
    <div className='w-[1230px] mx-auto mt-[180px]'>
       <h2 className='text-black text-[46px] leading-[130%]
       text-center'>What our clients say</h2>
       <Swiper
       modules={[Navigation]}
       slidesPerView={"auto"}
       navigation={true}
       loop={true}
       className="mt-[70px] relative">
      {comments.map((obj,index)=> (
       <SwiperSlide key={index}>
          <div className='w-[1030px] mx-auto pt-[64px] h-[344px] bg-white
          z-[1] sticky shadow-shadow-card'>
            <div className='w-[810px] h-[216px] bg-white ml-[105px]'>
              <div className='flex relative'>
                 <img
                 className='absolute'
                 src={braces} alt="braces"/>
                <div className='w-[752px] ml-[30px] text-start absolute right-0'>
                 <p className='text-black text-[20px] leading-[150%]'>{obj.title}</p>
                 <div className='w-[261px] flex justify-between items-center mt-[24px]'>
                    <img src={obj.img} alt="img" />
                  <div>
                    <b>{obj.name}</b>
                    <p>{obj.position}</p>
                  </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
          <img className='absolute top-0 left-[120px]' src={top} alt="top" />
       </SwiperSlide>
      ))}
     </Swiper>
    </div>
  )
}

export default Commets

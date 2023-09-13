import React from 'react'
import people1 from "../../../../assets/people/image.png"
import people2 from "../../../../assets/people/image2.png"
import people3 from "../../../../assets/people/image3.png"
import people4 from "../../../../assets/people/image4.png"
import people5 from "../../../../assets/people/image5.png"
import people6 from "../../../../assets/people/image6.png"
import people7 from "../../../../assets/people/image7.png"
import people8 from "../../../../assets/people/image8.png"
import facebook from "../../../../assets/PagesImage/Footer/Facebook.svg"
import insta from "../../../../assets/PagesImage/Footer/Instagram.svg"
import linked from "../../../../assets/PagesImage/Footer/Linked-In.svg"

const people = [
  {
    img: people1,
    name: 'Courtney Alexander',
    position: 'Founder and CEO'
  },
  {
    img: people2,
    name: 'Johnny Lane',
    position: 'Director of Client Services'
  },
  {
    img: people3,
    name: 'Diane Mccoy',
    position: 'Lead Digital PR Strategist'
  },
  {
    img: people4,
    name: 'Judith Warren',
    position: 'Cheaf Marketing Officer'
  },
  {
    img: people5,
    name: 'Floyd Simmmons',
    position: 'Account Director'
  },
  {
    img: people6,
    name: 'Shawn Edwards',
    position: 'Director of PPC'
  },
  {
    img: people7,
    name: 'Jane Cooper',
    position: 'Digital Marketing Manager'
  },
  {
    img: people8,
    name: 'Soham Alexander',
    position: 'Director of SEO'
  },
]

function People() {

  return (
    <div className='w-[1230px] mx-auto mt-[155px]'>
       <h1 className='text-[46px] text-black leading-[130%] text-center'>
        Meet our team</h1>
    <div className='w-[1230px] h-[900px] mt-[60px] content-between flex justify-between flex-wrap'>
       {people.map((obj,index)=> (
        <div
        key={index}
        className='relative'>
         <div
         className='w-[285px] h-[416px] text-center'>
          <img
          src={obj.img} alt="img" />
          <h6 className='text-[20px] text-black leading-[150%] mt-[16px]'>{obj.name}</h6>
          <p className='text-[16px] text-gray leading-[160%] mt-[4px]'>{obj.position}</p>
         </div>
         <div className='w-[285px] h-[340px] hover:bg-gradient absolute top-0'>
           <div className='w-[84px] flex justify-between
           absolute bottom-[20px] right-[20px]'>
             <img src={facebook} alt="facebook" />
             <img src={insta} alt="insta" />
             <img src={linked} alt="linked" />
           </div>
         </div>
        </div>
         ))}
     </div>
    </div>
  )
}

export default People

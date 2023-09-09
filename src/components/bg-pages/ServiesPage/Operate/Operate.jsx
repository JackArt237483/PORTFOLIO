import React from 'react'
import card1 from "../../../../assets/ServiesImage/operate/ic-cart.png"
import card2 from "../../../../assets/ServiesImage/operate/ic-startup.png"
import card3 from "../../../../assets/ServiesImage/operate/Group.svg"
import card4 from "../../../../assets/ServiesImage/operate/ic-website.png"

const cards = [
  {
    img: card1,
    title: 'E-commerce Websites',
    text: 'Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. '
  },
  {
    img: card2,
    title: 'Content-rich Websites',
    text: 'Culpa nostrud commodo ea consequat reprehenderit aliquip. '
  },
  {
    img: card3,
    title: 'B2B /B2C Services',
    text: 'Viverra scelerisque consequat net. Adipisicing esse consequat. '
  },
   {
    img: card4,
    title: 'Startup Projects',
    text: 'Aute eiusmod dolore dolore deserunt veniam ad deserunt. '
  },
]

function Operate() {
  return (
    <div className='w-[1230px] mx-auto mt-[180px]'>
       <h1 className='text-[46px] text-black leading-[130%] text-center'>
        Markets in which we operate</h1>
        <div className='flex justify-between items-center mt-[60px]'>
           {
            cards.map((obj,index)=> (
              <div key={index} className='w-[240px] h-[162px]'>
                 <img
                 className='mx-auto'
                 src={obj.img} alt="cards" />
                 <div className='text-center pt-[24px]'>
                  <b className='text-gray text-[20px] leading-[150%]'>{obj.title}</b>
                  <p className='text-gray text-[16px] leading-[160%] mt-[8px]'>
                    {obj.text}</p>
                  </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Operate

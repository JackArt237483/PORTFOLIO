import React from 'react'
import Video from "../../../../assets/AboutUs/Video (1).png"
import like from "../../../../assets/AboutUs/ic-like.png"
import management from "../../../../assets/AboutUs/ic-management.png"
import checklist from "../../../../assets/AboutUs/ic-checklist.png"
import view from "../../../../assets/AboutUs/ic-view.png"

const stand = [
  {
    img: like,
    text: 'Respect',
    title: 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.'
  },
  {
    img: view,
    text: 'Transparency',
    title: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. '
  },
  {
    img: management ,
    text: 'Commitment',
    title: 'Fusce parturient diam magna ullamcorper morbi semper massa ac facilisisViverra scelerisque consequat.'
  },
  {
    img: like,
    text: 'Cooperation',
    title: 'Porttitor diam consectetur aliquam vitae urna, pharetra, at ipsum. Pretium placerat turpis sed viverra consequat.'
  },
]

function WeStand() {
  return (
    <div className='w-[1230px] mx-auto'>
      <div className='mt-[120px]'>
         <img src={Video} alt="video" />
      </div>
      <div className='w-[1230px] flex justify-between mt-[180px]'>
        <h2 className='text-black leading-[130%] w-[340px] text-[46px]'>
          The core values we stand for</h2>
        <div className='w-[750px] flex justify-between content-between
        flex-wrap h-[450px] items-center'>
          {stand.map((obj, index)=> (
            <div
            key={index}
            className='w-[344px] h-[188px] text-start'>
              <img
              className="mb-[24px]"
              src={obj.img} alt="img" />
              <b className='text-black leading-[150%] text-[20px]'>{obj.text}</b>
              <p className='text-gray leading-[160%] text-[16px]'>{obj.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WeStand

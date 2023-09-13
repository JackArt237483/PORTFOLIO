import React from 'react'
import page from "../../../../assets/awards/illustration (11).png"
import cardone from "../../../../assets/awards/image (52).png"
import cardtwo from "../../../../assets/awards/image (53).png"
import cardthree from "../../../../assets/awards/image (54).png"
import cardfor from "../../../../assets/awards/image (55).png"

const infotext = [
  {img: cardone, title: 'Top SEO Companies 2020 by Clutch'},
  {img: cardtwo, title: 'Top Digital Marketing Agency 2019 by UpCity'},
  {img: cardthree, title: 'Official Member 2020 by Forbes Agency Council'},
  {img: cardfor, title: 'Top SEO Companies 2020 by Top Developers'},
]

function Awards() {
  return (
    <div className='w-[1230px] mx-auto flex justify-between items-center mt-[120px]'>
      <img src={page} alt="page" />
      <div className='w-[706px] h-[300px]'>
        <h4 className='text-black text-[46px] leading-[130%]'>
          We are proud of our awards</h4>
        <div className='w-[706px] h-[198px] flex justify-between
          mt-[60px] content-between flex-wrap'>
          {infotext.map((obj,index)=> (
            <div
            key={index}
            className='w-[326px] flex justify-between gap-5 items-center'>
              <img src={obj.img} alt="img" />
              <p className='text-[16px] leading-[160%] text-[#424551]'>
                {obj.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Awards

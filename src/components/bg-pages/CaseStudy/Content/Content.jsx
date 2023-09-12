import React from 'react'
import diagram from "../../../../assets/Analitics/diagram.png"
import Sidebar from '../Sidebar/Sidebar'
import check from "../../../../assets/Analitics/check.svg"
import card from "../../../../assets/Analitics/illustration (8).png"

const textone = [
  {img: check, title:'Gravida elit et libero, varius congue risus quisque enim.'},
  {img: check, title:'Sit quis vitae, gravida aliquam condimentum.'},
  {img: check, title:'Praesent et facilisis nam mus senectus massa dignissim.'},
  {img: check, title:'Fermentum diam elementum viverra proin.'},
]

const texttwo = [
  {img: check, title:'Bibendum malesuada mauris, id nisl enim diam.'},
  {img: check, title:'Nam id in non sed cras purus nunc et.'},
  {img: check, title:'Neque tortor, pellentesque amet est, eu accumsan condimentum nulla.'},
  {img: check, title:'Mauris orci, cursus nisl odio est adipiscing gravida magna eget.'},
  {img: check, title:'MSit turpis sit ultrices viverra adipiscing malesuada.'}
]

const textthree = [
  {img: check, title:'Mauris dignissim blandit cursus imperdiet accumsan lorem vel, tortor.'},
  {img: check, title:'Quis mauris vel felis convallis nulla dignissim.'},
  {img: check, title:'Cursus sit platea ac posuere non interdum in.'},
  {img: check, title:'Mattis pellentesque vel, venenatis, urna, quis ut.'},
]

function Content() {
  return (
    <div className='w-[1230px] mx-auto mt-[104px] flex justify-between'>
      <div className='w-[704px]'>
        <div className='w-[631px] flex justify-between'>
          <div className='w-[194px] flex justify-between'>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <g clip-path="url(#clip0_1772_2380)">
              <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M40 72C57.6731 72 72 57.6731 72 40C72 22.3269 57.6731 8 40 8C22.3269 8 8 22.3269 8 40C8 57.6731 22.3269 72 40 72ZM40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#F52F6E"/>
              <path d="M40 72C57.6731 72 72 57.6731 72 40C72 22.3269 57.6731 8 40 8V0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 36.547 0.43753 33.1962 1.26017 30L9 32.0317C8.34714 34.5791 8 37.249 8 40C8 57.6731 22.3269 72 40 72Z" fill="#F52F6E"/>
            </g>
            <defs>
              <clipPath id="clip0_1772_2380">
                <rect width="80" height="80" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <div>
            <b className='text-[32px] text-black leading-[130%]'>70%</b>
            <p className='text-[20px] text-black leading-[150%]'>Open Rate</p>
          </div>
          </div>
          <div className='w-[235px] flex justify-between'>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <g clip-path="url(#clip0_1772_2388)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M40 72C57.6731 72 72 57.6731 72 40C72 22.3269 57.6731 8 40 8C22.3269 8 8 22.3269 8 40C8 57.6731 22.3269 72 40 72ZM40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z" fill="#F89828"/>
            </g>
            <defs>
              <clipPath id="clip0_1772_2388">
                <rect width="80" height="80" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <div>
            <b className='text-[32px] text-black leading-[130%]'>200%</b>
            <p className='text-[20px] text-black leading-[150%]'>Growth in sales</p>
          </div>
          </div>
          <div className='w-[82px] '>
            <b className='text-[32px] text-black leading-[130%]'>8,000</b>
            <p className='text-[20px] text-black leading-[150%]'>DAU</p>
          </div>
        </div>
        <h4 className='text-[20px] text-black leading-[150%] mt-[80px] w-[705px]'>
          The Company has been with us for 3 months. They are in our optimal package for SEO & our premium package for SEM plus Ad spend ($1,000). The client’s goal was to get growth in sales. We helped exceeding the client’s goals in generating new clients.</h4>
        <p className='text-[16px] text-black leading-[160%] mt-[24px] w-[705px]'>
          At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.</p>
        <img
        className='mt-[80px] w-[705px] h-[453px] ml-[-49px]'
        src={diagram} alt="diagram" />
        <div className='w-[423px] text-start'>
          <h4 className='text-[20px] text-black leading-[150%]'>Strategies</h4>
          <ul className='mt-[24px]'>
            {textone.map((obj,index)=> (
              <li key={index}
              className='w-[415px] flex justify-start mt-[4px]'>
                <img src={obj.img} alt="img"/>
                <p className='text-[16px] text-[#424551] leading-[160%] ml-[16px]'>{obj.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className='text-[16px] text-black leading-[160%] mt-[24px]'>
          Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.</p>
        <img src={card} alt="card" />
        <div className='w-[423px] text-start'>
          <h4 className='text-[20px] text-black leading-[150%]'>Resieved goals</h4>
          <ul className='mt-[24px]'>
            {texttwo.map((obj,index)=> (
              <li key={index}
              className='w-[500px] flex justify-start mt-[4px]'>
                <img src={obj.img} alt="img"/>
                <p className='text-[16px] text-[#424551] leading-[160%] ml-[16px]'>{obj.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-[423px] mt-[60px] text-start'>
          <h4 className='text-[20px] text-black leading-[150%]'>Results</h4>
          <ul className='mt-[24px]'>
            {textthree.map((obj,index)=> (
              <li key={index}
              className='w-[500px] flex justify-start mt-[4px]'>
                <img src={obj.img} alt="img"/>
                <p className='text-[16px] text-[#424551] leading-[160%] ml-[16px]'>{obj.title}</p>
              </li>
            ))}
          </ul>
        </div>
       </div>
      <Sidebar/>
    </div>
  )
}

export default Content

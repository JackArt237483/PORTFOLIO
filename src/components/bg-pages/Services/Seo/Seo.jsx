import React from 'react'
import onecard from "../../../../assets/PagesImage/Services/cardone.png"

function Seo() {
  return (
    <div className='w-[1230px] mx-auto flex justify-between mt-[60px]'>
      <img src={onecard} alt="onecard" />
      <div className='w-[400px] text-start'>
        <h2 className='text-black leading-[130%] text-[46px]'>
          We go above and beyond to ensure successful SEO</h2>
        <p className='text-gray leading-[160%] text-[16px] mt-[40px]'>
          Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra
          ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris
          orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget
          orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique
          libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien.
          Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna
          ultricies orci.</p>
      </div>
    </div>
  )
}

export default Seo

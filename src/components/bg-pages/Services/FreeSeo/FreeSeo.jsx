import React from 'react'

function FreeSeo() {
  return (
    <div className='max-w-[1230px] mx-auto bg-perple h-[243px] mt-[120px]'>
      <h2 className='text-[32px] text-white leading-[130%] text-center pt-[40px]'>
        Get a Free SEO Analysis!</h2>
      <form className="w-[1108px] mx-auto flex items-end justify-between mt-[32px]">
         <div className='flex flex-col'>
           <label
           className='text-[14px] leading-[21px] text-white'
           htmlFor="Name">Name</label>
           <input
           type="text"
           placeholder='Your name'
           className='w-[260px] border border-solid border-white rounded-[4px]
           p-[16px_12px] text-[14px] leading-[21px] text-gray mt-[8px]'/>
         </div>
         <div className='flex flex-col'>
           <label
           className='text-[14px] leading-[21px] text-white'
           htmlFor="Email">Email</label>
           <input
           placeholder='Your working email'
           type="text"
           className='w-[260px] border border-solid border-white rounded-[4px]
           p-[16px_12px] text-[14px] leading-[21px] text-gray mt-[8px]'/>
         </div>
         <div className='flex flex-col'>
           <label
           className='text-[14px] leading-[21px] text-white'
           htmlFor="Your website URL">Your website URL</label>
           <input
           placeholder='http://yoursite.com'
           type="text"
           className='w-[260px] border border-solid border-white rounded-[4px]
           p-[16px_12px] text-[14px] leading-[21px] text-gray mt-[8px]'/>
         </div>
         <button className='w-[180px] h-[55px] p-[0px_32px] rounded-[4px]
         text-[14px] text-white leading-[44px] bg-black'>Analyse your site</button>
      </form>
    </div>
  )
}

export default FreeSeo

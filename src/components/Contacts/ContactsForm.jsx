import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import image from "../../assets/Carres/Illustration (14).png"

const social = [
  {title: 'Social Media'},
  {title: 'SEO'},
  {title: 'Research'},
  {title: 'Research'},
  {title: 'Content & PR'}
]

const marks = [
  {
    value: 0,
    label: '$1K',
  },
  {
    value: 25,
    label: '$25K',
  },
  {
    value: 50,
    label: '$50K',
  },
  {
    value: 75,
    label: '$50K',
  },
  {
    value: 100,
    label: '$100K',
  },
];

function valuetext(value) {
  return ``;
}

function ContactsForm() {
  return (
    <div className='w-[1260px] mx-auto mt-[80px] flex justify-between items-center'>
      <div className='w-[601px] text-start flex flex-wrap flex-col'>
        <h2 className='text-[46px] leading-[130%]'>
          Ready to get started?</h2>
        <p className='text-[16px] leading-[160%] text-[#424551] mt-[40px]'>
        Services</p>
        <div className='w-[601px] flex justify-between'>
           {social.map((obj,index)=>(
            <button
            key={index}
            className='border border-solid border-[#D7DADD] rounded
            h-[32px] p-[5.5px_16px] text-center text-[14px] leading-[21px] mt-[16px]
            text-gray hover:bg-perple hover:text-white hover:border-perple'
            >{obj.title}</button>
           ))}
        </div>
        <div className='w-[601px] flex justify-between mt-[40px]'>
          <div className='w-[285px] h-[86px]'>
             <label
             className='text-[#424551] text-[16px] leading-[160%]'
             htmlFor="Name">First Name*</label>
             <input
             className='mt-[7px] w-[285px] rounded text-[16px]
             leading-[160%] text-gray p-[13px_16px] bg-[#F4F5F6]
             border border-solid border-[#D7DADD]'
             placeholder='Your first name'
             type="text" />
          </div>
          <div className='w-[285px] h-[86px]'>
             <label
             className='text-[#424551] text-[16px] leading-[160%]'
             htmlFor="Name">Last Name*</label>
             <input
             className='mt-[7px] w-[285px] rounded text-[16px]
             leading-[160%] text-gray p-[13px_16px] bg-[#F4F5F6]
             border border-solid border-[#D7DADD]'
             placeholder='Your last name'
             type="text" />
          </div>
        </div>
        <div className='w-[601px] flex justify-between mt-[24px]'>
          <div className='w-[285px] h-[86px]'>
             <label
             className='text-[#424551] text-[16px] leading-[160%]'
             htmlFor="Name">Email*</label>
             <input
             className='mt-[7px] w-[285px] rounded text-[16px]
             leading-[160%] text-gray p-[13px_16px] bg-[#F4F5F6]
             border border-solid border-[#D7DADD]'
             placeholder='Your working email'
             type="text" />
          </div>
          <div className='w-[285px] h-[86px]'>
             <label
             className='text-[#424551] text-[16px] leading-[160%]'
             htmlFor="Name">Phone*</label>
             <input
             className='mt-[7px] w-[285px] rounded text-[16px]
             leading-[160%] text-gray p-[13px_16px] bg-[#F4F5F6]
             border border-solid border-[#D7DADD]'
             placeholder='Your phone number'
             type="text" />
          </div>
        </div>
        <div className='w-[601px] flex justify-between mt-[24px]'>
          <div className='w-[285px] h-[86px]'>
             <label
             className='text-[#424551] text-[16px] leading-[160%]'
             htmlFor="Name">Company</label>
             <input
             className='mt-[7px] w-[285px] rounded text-[16px]
             leading-[160%] text-gray p-[13px_16px] bg-[#F4F5F6]
             border border-solid border-[#D7DADD]'
             placeholder='Your company name'
             type="text" />
          </div>
          <div className='w-[285px] h-[86px]'>
             <label
             className='text-[#424551] text-[16px] leading-[160%]'
             htmlFor="Name">Position</label>
             <input
             className='mt-[7px] w-[285px] rounded text-[16px]
             leading-[160%] text-gray p-[13px_16px] bg-[#F4F5F6]
             border border-solid border-[#D7DADD]'
             placeholder='Your position'
             type="text" />
          </div>
        </div>
        <div className='mt-[24px]'>
        <p className='text-[16px] leading-[160%] text-[#424551]'>
        Approx. budget</p>
        <Box
        className='!mt-[30px]'
        sx={{ width: 601}}>
          <Slider
            span
            aria-label="Always visible"
            defaultValue={0}
            getAriaValueText={valuetext}
            step={10}
            marks={marks}
            valueLabelDisplay="on"
          />
        </Box>
        </div>
        <div className='w-[601px] mt-[24px]'>
             <label
             className='text-[#424551] text-[16px] leading-[160%]'
             htmlFor="Name">Additional Details</label>
             <input
             className='mt-[7px] w-[600px] h-[128px] rounded text-[16px]
             leading-[160%] text-gray p-[13px_16px] bg-[#F4F5F6]
             border border-solid border-[#D7DADD]'
             placeholder='Your message'
             type="text" />
        </div>
        <div className='w-[600px] flex justify-between mt-[48px]'>
          <div className='w-[315px] flex justify-between items-center'>
            <input type="checkbox"/>
            <p className='text-[16px] leading-[160%] text-[#424551] w-[287px]'>
              I agree to receive communications from Createx SEO Agency</p>
          </div>
          <button className='w-[225px] h-[52px] bg-perple
          p-[0px_40px] rounded-[4px] text-[16px] leading-[52px] text-white'>
          Request a proposal
          </button>
        </div>
      </div>
      <div>
      <img src={image} alt="img" />
      </div>
    </div>
  )
}

export default ContactsForm

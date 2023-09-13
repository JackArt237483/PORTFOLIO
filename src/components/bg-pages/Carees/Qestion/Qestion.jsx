import React, {useState} from 'react'
import plus from "../../../../assets/SVG/Plus.svg"
import minus from "../../../../assets/SVG/Minus.svg"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const qestion = [
  {ask: "Digital Marketing Strategist",
  title: "Blandit quam eget fames nisl. Vel vestibulum dictum morbi risus. Mauris dictumst vitae convallis aliquam ullamcorper. Quis non non ac massa augue id scelerisque. Egestas eget cursus egestas habitant orci. In posuere tempus, vulputate est, diam arcu."},
  {ask: "Sales Executive",
  title: "Blandit quam eget fames nisl. Vel vestibulum dictum morbi risus. Mauris dictumst vitae convallis aliquam ullamcorper. Quis non non ac massa augue id scelerisque. Egestas eget cursus egestas habitant orci. In posuere tempus, vulputate est, diam arcu."},
  {ask: "Social Media Content Manager",
  title: "Blandit quam eget fames nisl. Vel vestibulum dictum morbi risus. Mauris dictumst vitae convallis aliquam ullamcorper. Quis non non ac massa augue id scelerisque. Egestas eget cursus egestas habitant orci. In posuere tempus, vulputate est, diam arcu."},
  {ask: " Digital Marketing Account Manager",
  title: "Blandit quam eget fames nisl. Vel vestibulum dictum morbi risus. Mauris dictumst vitae convallis aliquam ullamcorper. Quis non non ac massa augue id scelerisque. Egestas eget cursus egestas habitant orci. In posuere tempus, vulputate est, diam arcu."},
  {ask: " SEO Strategist",
  title: "Blandit quam eget fames nisl. Vel vestibulum dictum morbi risus. Mauris dictumst vitae convallis aliquam ullamcorper. Quis non non ac massa augue id scelerisque. Egestas eget cursus egestas habitant orci. In posuere tempus, vulputate est, diam arcu."},
]

const askone = [
  {title: 'Vitae luctus et arcu vitae eu tellus orci.'},
  {title: 'Vel morbi nunc ullamcorper nisl, quis varius ultricies blandit.'},
  {title: 'Purus cursus nascetur leo diam.'},
  {title: 'Nascetur id turpis facilisis faucibus vel, iaculis etiam.'}
]

const asktwo = [
  {title: 'Dui, lectus at dui magna vitae vitae egestas sed.'},
  {title: 'Vulputate placerat amet pulvinar lorem nisl.'},
  {title: 'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.'},
  {title: 'Etiam duis lobortis in fames ultrices commodo nibh.'}
]


function Qestionstwo() {

  const [isOpen, setIsOpen] = useState(null)

  const changeState = (index) => {
     setIsOpen(isOpen === index ? null : index)
  }

  return (
  <div className='max-w-[1920px] mx-auto bg-[#f4f5f6]'>
    <div className='mx-auto w-[1230px] pb-[100px] flex justify-between items-center pt-[180px]'>
      <div>
      {qestion.map((obj,index)=>(
        <div
        className='flex bg-[#f4f5f6]'
        key={index}>
        <Accordion
        style={{
         "margin": "0px",
        }}
        className="!sticky !shadow-none !border-white !bg-[#f4f5f6]"
        expanded={isOpen === index}
        onChange={() => changeState(index)}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="w-[550px] flex  flex-row-reverse">
          <Typography
           className="text-start !text-[28px] !text-black
           !flex !leading-[150%]">
            {isOpen === index ? (
           <img className='!pr-[20px]' src={minus} alt="plus" />)
             :
           (<img className='!pr-[20px]' src={plus} alt="plus" />)}
           {obj.ask}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
          className="text-start text-[16px] text-gray leading-[160%]">
           {obj.title}
            <div className='w-[440px]'>
              <h5 className='text-start text-[16px] mt-[24px] text-gray leading-[160%]'>
                Requirements:</h5>
              <ul className='mt-[24px]'>
                {askone.map((obj,index)=> (
                  <li key={index}
                  className='text-[16px] text-gray leading-[160%]'>
                    {obj.title}</li>
                ))}
              </ul>
            </div>
            <div className='w-[440px]'>
              <h5 className='text-start text-[16px] mt-[24px] text-gray leading-[160%]'>
                Requirements:</h5>
              <ul className='mt-[24px]'>
                {asktwo.map((obj,index)=> (
                  <li key={index}
                  className='text-[16px] text-gray leading-[160%]'>
                    {obj.title}</li>
                ))}
              </ul>
            </div>
          </Typography>
        </AccordionDetails>
         </Accordion>
   <button className='w-[180px] h-[44px] p-[0px_32px] border rounded-[4px]
   border-solid border-perple text-perple text-[14px] leading-[44px]'>
     Apply now
   </button></div>))}
      </div>
    </div>
  </div>
  )
}

export default Qestionstwo


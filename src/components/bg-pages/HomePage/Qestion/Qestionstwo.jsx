import React from 'react'
import animate from "../../../../assets/background/backgroundthree.png"
import plus from "../../../../assets/SVG/Plus.svg"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const qestion = [
  {ask: "Aliquet lectus urna viverra in odio?",
  title: "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."},
  {ask: "Orci commodo, viverra orci mollis ut euismod?",
  title: "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."},
  {ask: "Sagittis vitae facilisi rutrum amet mauris quisque vel convallis?",
  title: "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."},
  {ask: "In id dolor quis nunc, urna hendrerit pharetra?",
  title: "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."},
  {ask: "Est, ut tempus id rutrum facilisi?",
  title: "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."},
  {ask: "Amet nec in pellentesque tincidunt vulputate vivamus?",
  title: "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."},
  {ask: "Neque, cursus sapien nullam id. Massa vel arcu mauris, id vel rhoncus mattis quis?",
  title: "Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis."},
]

function Qestionstwo() {
  return (
    <div className='mx-auto w-[1230px] flex justify-between  items-center mt-[180px]'>
      <div className='w-[600px]'>
        <h3 className='text-[46px] leading-[130%] text-black mb-[60px] text-start'>
          Freequently Ask Questions</h3>
          {qestion.map((obj,index)=>(
             <Accordion
             style={{
              "margin": "0px",
             }}
             key={index}
             className="!sticky !shadow-none !border-white">
             <AccordionSummary
               aria-controls="panel1a-content"
               id="panel1a-header"
               className="w-[550px] flex flex-row-reverse">
               <Typography
                className="text-start !text-[20px] !text-black
                !flex !leading-[150%]"
               >
                <img
                className='!pr-[20px]'
                src={plus} alt="plus" />
                {obj.ask}</Typography>
             </AccordionSummary>
             <AccordionDetails>
               <Typography
               className="text-start text-[16px] text-gray leading-[160%]">
                {obj.title}
               </Typography>
             </AccordionDetails>
              </Accordion>))}
        </div>
        <div>
         <img src={animate} alt="animate" />
        </div>
    </div>
  )
}

export default Qestionstwo

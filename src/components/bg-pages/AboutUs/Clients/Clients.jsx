import React from 'react'
import com1 from "../../../../assets/PagesImage/TopCompany/For Sale Logo.png"
import com2 from "../../../../assets/PagesImage/TopCompany/Happy Home Logo.png"
import com3 from "../../../../assets/PagesImage/TopCompany/Higher Fit Logo - Untitled Page.png"
import com4 from "../../../../assets/PagesImage/TopCompany/InDepth Consulting Logo - Untitled Page.png"
import com5 from "../../../../assets/PagesImage/TopCompany/Sentinal Consulting Logo.png"
import com6 from "../../../../assets/PagesImage/TopCompany/Sunset Realty Logo.png"
import card1 from "../../../../assets/Company/client-logo (1).png"
import card2 from "../../../../assets/Company/client-logo (2).png"
import card3 from "../../../../assets/Company/client-logo (3).png"
import card4 from "../../../../assets/Company/client-logo (4).png"
import card5 from "../../../../assets/Company/client-logo (5).png"
import card6 from "../../../../assets/Company/client-logo (6).png"

function Clients() {
  return (
    <div className='w-[1230px] mx-auto mt-[120px]'>
      <h3 className='text-[46px] leading-[130%] text-black text-center'>
      240+ satisfied clients
      </h3>
      <div className='w-[1230px] h-[74px] mx-auto flex justify-between mt-[60px]'>
        <img src={com1} alt="1" />
        <img src={com2} alt="2" />
        <img src={com3} alt="3" />
        <img src={com4} alt="4" />
        <img src={com5} alt="5" />
        <img src={com6} alt="6" />
      </div>
      <div className='w-[1230px] h-[74px] mx-auto flex justify-between mt-[16px]'>
        <img src={card1} alt="1" />
        <img src={card2} alt="2" />
        <img src={card3} alt="3" />
        <img src={card4} alt="4" />
        <img src={card5} alt="5" />
        <img src={card6} alt="6" />
      </div>
    </div>
  )
}

export default Clients

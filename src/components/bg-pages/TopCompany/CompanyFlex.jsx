import React from 'react'
import com1 from "../../../assets/PagesImage/TopCompany/For Sale Logo.png"
import com2 from "../../../assets/PagesImage/TopCompany/Happy Home Logo.png"
import com3 from "../../../assets/PagesImage/TopCompany/Higher Fit Logo - Untitled Page.png"
import com4 from "../../../assets/PagesImage/TopCompany/InDepth Consulting Logo - Untitled Page.png"
import com5 from "../../../assets/PagesImage/TopCompany/Sentinal Consulting Logo.png"
import com6 from "../../../assets/PagesImage/TopCompany/Sunset Realty Logo.png"

function CompanyFlex() {
  return (
    <div className='w-[1230px] h-[74px] mx-auto flex justify-between mt-[140px]'>
       <img src={com1} alt="1" />
       <img src={com2} alt="2" />
       <img src={com3} alt="3" />
       <img src={com4} alt="4" />
       <img src={com5} alt="5" />
       <img src={com6} alt="6" />
    </div>
  )
}

export default CompanyFlex

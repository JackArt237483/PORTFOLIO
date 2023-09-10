import React from 'react'
import ServiesTwo from '../../components/bg-pages/Services/ServiesFirst/ServiesTwo'
import CompanyFlex from "../../components/bg-pages/TopCompany/CompanyFlex"
import Seo from '../../components/bg-pages/Services/Seo/Seo'
import SeoServies from '../../components/bg-pages/Services/SeoServies/SeoServies'
import FreeSeo from '../../components/bg-pages/Services/FreeSeo/FreeSeo'
import HowItWorks from '../../components/bg-pages/Services/howitworks/HowItWorks'
import PlansPrize from "../../components/PlansPrize/PlansPrize"
import OurCleintTwo from '../../components/OurClients/OurClientTwo'
import OurrServies from  "../../components/OurServices/OurrServies"
import Footer from "../../components/Base/Footer/Footer"

function Services() {
  return (
    <div>
      <ServiesTwo/>
      <CompanyFlex/>
      <Seo/>
      <SeoServies/>
      <FreeSeo/>
      <HowItWorks/>
      <PlansPrize/>
      <OurCleintTwo/>
      <OurrServies/>
      <Footer/>
    </div>
  )
}

export default Services

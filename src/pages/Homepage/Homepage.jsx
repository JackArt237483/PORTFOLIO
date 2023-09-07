import React from 'react'
import FirstPageBack from '../../components/bg-pages/HomePage/FirstPageBack'
import TopCompany from '../../components/bg-pages/TopCompany/TopCompany'
import CompanyFlex from '../../components/bg-pages/TopCompany/CompanyFlex'
import CreateAgent from '../../components/bg-pages/HomePage/CreateAgent/CreateAgent'
import Projent from '../../components/Projent/Projent'
import OurrServies from '../../components/OurServices/OurrServies'
import Analitics from '../../components/Analytics/Analitics'
import Qestion from '../../components/bg-pages/HomePage/Qestion/Qestion'
import OurCleints from '../../components/OurClients/OurCleints'
import OurBenefits from '../../components/bg-pages/HomePage/OurBenefits/OurBenefits'
import PlansPrize from '../../components/PlansPrize/PlansPrize'
import Commets from '../../components/Comments/Commets'
import News from '../../components/News/News'
import Footer from '../../components/Base/Footer/Footer'

function Homepage() {
  return (
    <div>
       <FirstPageBack/>
       <TopCompany/>
       <CompanyFlex/>
       <CreateAgent/>
       <Projent/>
       <OurrServies/>
       <Analitics/>
       <Qestion/>
       <OurCleints/>
       <OurBenefits/>
       <PlansPrize/>
       <Commets/>
       <News/>
       <Footer/>
    </div>
  )
}

export default Homepage

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
    </div>
  )
}

export default Homepage

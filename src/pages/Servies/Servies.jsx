import React from 'react'
import ServiesFirst from '../../components/bg-pages/ServiesPage/ServiesFirst'
import Social from '../../components/bg-pages/ServiesPage/AnaliticsBage/Social'
import Search from '../../components/bg-pages/ServiesPage/AnaliticsBage/Search'
import Traffic from '../../components/bg-pages/ServiesPage/AnaliticsBage/Traffic'
import Content from '../../components/bg-pages/ServiesPage/AnaliticsBage/Content'
import Marketing from '../../components/bg-pages/ServiesPage/AnaliticsBage/Marketing'
import Analitics from '../../components/Analytics/Analitics'
import OurClients from '../../components/OurClients/OurCleints'
import News from '../../components/News/News'
import Footer from '../../components/Base/Footer/Footer'
import CompanyFlex from '../../components/bg-pages/TopCompany/CompanyFlex'
import Operate from '../../components/bg-pages/ServiesPage/Operate/Operate'

function Servies() {
  return (
    <div>
      <ServiesFirst/>
      <Social/>
      <Search/>
      <Traffic/>
      <Content/>
      <Marketing/>
      <Analitics/>
      <OurClients/>
      <Operate/>
      <CompanyFlex/>
      <News/>
      <Footer/>
    </div>
  )
}

export default Servies

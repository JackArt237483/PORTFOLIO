import React from 'react'
import CaseStudyBase from '../../components/bg-pages/CaseStudy/CaseStudyBase'
import Content from '../../components/bg-pages/CaseStudy/Content/Content'
import Analitics from '../../components/Analytics/Analitics'
import Commets from "../../components/Comments/Commets"
import OurCleints from '../../components/OurClients/OurCleints'
import Footer from '../../components/Base/Footer/Footer'

function CaseStudy() {
  return (
    <div>
      <CaseStudyBase/>
      <Content/>
      <Analitics/>
      <Commets/>
      <OurCleints/>
      <Footer/>
    </div>
  )
}

export default CaseStudy
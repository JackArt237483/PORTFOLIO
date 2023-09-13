import React from 'react'
import BlockFirst from '../../components/bg-pages/AboutUs/BlockFirst/BlockFirst'
import Projent from '../../components/Projent/Projent'
import WeStand from '../../components/bg-pages/AboutUs/WeStand/WeStand'
import Galery from '../../components/bg-pages/AboutUs/Galery/Galery'
import Awards from '../../components/bg-pages/AboutUs/Awards/Awards'
import FreeSeo from '../../components/bg-pages/Services/FreeSeo/FreeSeo'
import Clients from '../../components/bg-pages/AboutUs/Clients/Clients'
import People from '../../components/bg-pages/AboutUs/People/People'
import Qestionstwo from '../../components/bg-pages/HomePage/Qestion/Qestionstwo'
import Carrees from "../../components/bg-pages/AboutUs/Carrers/Careers"
import News from "../../components/News/News"
import Footer from "../../components/Base/Footer/Footer"

function AboutUs() {
  return (
    <div>
      <BlockFirst/>
      <Projent/>
      <WeStand/>
      <Galery/>
      <Awards/>
      <FreeSeo/>
      <Clients/>
      <People/>
      <Qestionstwo/>
      <Carrees/>
      <News/>
      <Footer/>
    </div>
  )
}

export default AboutUs

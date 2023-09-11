import ButtonServies from "../../components/OurServices/ButtonServies"
import CaseStidius from "../../components/bg-pages/CaseStudius/CaseStidius"
import OurCase from "../../components/bg-pages/CaseStudius/OurCase/OurCase"
import CompanyFlex from "../../components/bg-pages/TopCompany/CompanyFlex"
import Comments from "../../components/Comments/Commets"
import News from "../../components/News/News"
import Footer from "../../components/Base/Footer/Footer"

function Services() {
  return (
    <div>
      <CaseStidius/>
      <ButtonServies/>
      <OurCase/>
      <CompanyFlex/>
      <Comments/>
      <News/>
      <Footer/>
    </div>
  )
}

export default Services

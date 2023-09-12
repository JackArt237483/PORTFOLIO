import { Route, Routes} from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Servies from './pages/Servies/Servies';
import ServicesTwo from './pages/Services/ServicesTwo';
import CaseStudius from "./pages/СaseStudius/CaseStudius"
import CaseStudy from "./pages/CaseStudty/CaseStudy"

function App() {
  return (
     <Routes>
       <Route path="/" element={<Homepage/>}/>
       <Route path="/servies" element={<Servies/>}/>
       <Route path="/services" element={<ServicesTwo/>}/>
       <Route path="/casestudius" element={<CaseStudius/>}/>
       <Route path="/casestudy" element={<CaseStudy/>}/>
     </Routes>
  );
}

export default App;

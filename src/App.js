import { Route, Routes} from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Servies from './pages/Servies/Servies';
import ServicesTwo from './pages/Services/ServicesTwo';
import CaseStudius from "./pages/СaseStudius/CaseStudius"
import CaseStudy from "./pages/CaseStudty/CaseStudy"
import AboutUs from './pages/AboutUs/AboutUs';
import Carees from './pages/Carees/Carees';
import Blog from './pages/Blog/Blog';
import SinglePost from './pages/SinglePost/SinglePost';
import Contacts from './pages/Contacts/Contacts';

function App() {
  return (
     <Routes>
       <Route path="/" element={<Homepage/>}/>
       <Route path="/servies" element={<Servies/>}/>
       <Route path="/services" element={<ServicesTwo/>}/>
       <Route path="/casestudius" element={<CaseStudius/>}/>
       <Route path="/casestudy" element={<CaseStudy/>}/>
       <Route path="/aboutus" element={<AboutUs/>}/>
       <Route path="/carees" element={<Carees/>}/>
       <Route path="/blog" element={<Blog/>}/>
       <Route path="/singlepost" element={<SinglePost/>}/>
       <Route path="/contacts" element={<Contacts/>}/>
     </Routes>
  );
}

export default App;

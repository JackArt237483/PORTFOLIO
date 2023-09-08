import { Route, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Servies from './pages/Servies/Servies';
import './App.css';

function App() {
  return (
     <Routes>
       <Route path="/" element={<Homepage/>}/>
       <Route path="/servies" element={<Servies/>}/>
     </Routes>
  );
}

export default App;

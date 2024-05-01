import './App.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './LandingPage';
import { InfoHub } from './pages/aboutus/InfoHub';
import { Education } from './pages/modules/Education';
import { BeginnersPage } from './pages/beginnersguide/BeginnersPage';
import { Community } from './pages/community/Community';
import { Tips } from './pages/tips/Tips';

function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/InfoHub" element={<InfoHub />} />
            <Route path="/Education" element={<Education />} />
            <Route path='/BeginnersPage' element={<BeginnersPage />} />
            <Route path='/Community' element={<Community />} />
            <Route path='/Tips' element={<Tips />} />
        </Routes>
      </BrowserRouter>
  
    );
}
  
export default App;
  
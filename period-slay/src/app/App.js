import './App.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from './LandingPage';
import { InfoHub } from './pages/aboutus/InfoHub';

function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/InfoHub" element={<InfoHub />} />
        </Routes>
      </BrowserRouter>
  
    );
}
  
  export default App;
  
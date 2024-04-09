import './App.css';
import {LandingPageHeader} from './components/LandingPageHeader'
import {LandingHeroSection} from './components/LandingHeroSection'
import {LandingSubHero} from './components/LandingSubHero'
import {InfoSection} from './components/InfoSection';
import {SecondInfoSection} from './components/SecondInfoSection';
import {ThirdInfoSection} from './components/ThirdInfoSection';
import { FaqSection } from './components/FaqSection';
import { ContactUsSection } from './components/ContactUsSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <LandingPageHeader />
      <LandingHeroSection />
      <LandingSubHero />
      <InfoSection />
      <SecondInfoSection />
      <ThirdInfoSection />
      <FaqSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}

export default App;

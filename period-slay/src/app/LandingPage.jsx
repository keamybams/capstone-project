import './LandingPage.css'; 
import {LandingPageHeader} from './components/LandingPageHeader'
import {LandingHeroSection} from './components/LandingHeroSection'
import {LandingSubHero} from './components/LandingSubHero'
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';


export const LandingPage = () => {
  return (
    <div>
      <LandingPageHeader />
      <LandingHeroSection />
      <LandingSubHero />
      <FaqSection />
      <Footer />
    </div>

  );
}



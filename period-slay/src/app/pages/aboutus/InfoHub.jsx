import './InfoHub.css';
import {LandingPageHeader} from '../../components/LandingPageHeader'
import {FaqSection} from '../../components/FaqSection'
import { Footer } from '../../components/Footer';
import { AboutHeroSection } from './AboutHeroSection'
import { ContactUsSection } from '../../components/ContactUsSection'

export const InfoHub = () => {
  return (
    <div>
      <LandingPageHeader />
      <AboutHeroSection />

      <ContactUsSection />
      <Footer />
    </div>
  );
}



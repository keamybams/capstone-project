import './Education.css';
import {LandingPageHeader} from '../../components/LandingPageHeader'
import { Footer } from '../../components/Footer';
import { EducationHeroSection } from './EducationHeroSection'
import { EducationSubHero } from './EducationSubHero'
import { FaqSection } from '../../components/FaqSection'


export const Education = () => {
  return (
    <div>
      <LandingPageHeader />
      <EducationHeroSection />
      <EducationSubHero />
      <FaqSection />
      <Footer />
    </div>
  );
}



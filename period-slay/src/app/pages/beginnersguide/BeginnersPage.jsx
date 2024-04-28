import './BeginnersPage.css';
import {LandingPageHeader} from '../../components/LandingPageHeader'
import { Footer } from '../../components/Footer';
import { BeginnersHeroSection } from './BeginnersHeroSection'
import { BeginnersSubHero } from './BeginnersSubHero'
import { FaqSection } from '../../components/FaqSection'

export const BeginnersPage = () => {
  return (
    <div>
      <LandingPageHeader />
      <BeginnersHeroSection />
      <BeginnersSubHero />
      <FaqSection />
      <Footer />
    </div>
  );
}



import './BeginnersPage.css';
import {LandingPageHeader} from '../../components/LandingPageHeader'
import { Footer } from '../../components/Footer';
import { BeginnersHeroSection } from './BeginnersHeroSection'
import { BeginnersSubHero } from './BeginnersSubHero'
import { FaqSection } from '../../components/FaqSection'
import { BackButton } from '../../components/BackButton';

export const BeginnersPage = () => {
  return (
    <div>
      <LandingPageHeader />
      <BeginnersHeroSection />
      <BackButton />
      <BeginnersSubHero />
      <FaqSection />
      <Footer />
    </div>
  );
}



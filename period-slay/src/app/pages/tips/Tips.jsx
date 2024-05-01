
import {LandingPageHeader} from '../../components/LandingPageHeader'
import {TipsMain} from './TipsMain'
import { Footer } from '../../components/Footer';
import { TipsHeroSection } from './TipsHeroSection'
import { ContactUsSection } from '../../components/ContactUsSection'
import { BackButton } from '../../components/BackButton';


export const Tips = () => {
  return (
    <div>
      <LandingPageHeader />
      <TipsHeroSection />
      <BackButton />
      <TipsMain />
      <ContactUsSection />
      <Footer />
    </div>
  );
}



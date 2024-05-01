
import {LandingPageHeader} from '../../components/LandingPageHeader'
import {TipsMain} from './TipsMain'
import { Footer } from '../../components/Footer';
import { TipsHeroSection } from './TipsHeroSection'
import { ContactUsSection } from '../../components/ContactUsSection'


export const Tips = () => {
  return (
    <div>
      <LandingPageHeader />
      <TipsHeroSection />
      <TipsMain />
      <ContactUsSection />
      <Footer />
    </div>
  );
}



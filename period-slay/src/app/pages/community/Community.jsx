import './Community.css';
import {LandingPageHeader} from '../../components/LandingPageHeader'
import {FaqSection} from '../../components/FaqSection'
import { Footer } from '../../components/Footer';
import { CommunityHeroSection } from './CommunityHeroSection'
import { ContactUsSection } from '../../components/ContactUsSection'
import { CommunityInfoSection } from './CommunityInfoSection'
import { CommunitySecondInfoSection } from './CommunitySecondInfoSection';
import { CommunityThirdInfoSection } from './CommunityThirdInfoSection'

export const Community = () => {
  return (
    <div>
      <LandingPageHeader />
      <CommunityHeroSection />
      <CommunityInfoSection />
      <CommunitySecondInfoSection />
      <CommunityThirdInfoSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}



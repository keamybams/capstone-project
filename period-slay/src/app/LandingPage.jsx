import './LandingPage.css'; 
import {LandingPageHeader} from './components/LandingPageHeader'
import {LandingHeroSection} from './components/LandingHeroSection'
import {LandingSubHero} from './components/LandingSubHero'
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import React, { useState, useEffect } from 'react';
import {SignUpModal} from './components/SignUpModal';


export const LandingPage = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const isModalShown = localStorage.getItem('isModalShown');
    if (isModalShown) {
        setShowModal(false);
        localStorage.setItem('isModalShown', true);
    }
  }, []);

  const handleCloseModal = () => {
      setShowModal(false);
  };

  return (
    <div>
      <LandingPageHeader />
      <LandingHeroSection />
      {showModal && <SignUpModal onClose={handleCloseModal} />}
      <LandingSubHero />
      <FaqSection />
      <Footer />
    </div>

  );
}



import { useNavigate } from 'react-router-dom'
import './LandingHeroSection.css'
import heroImage from './hero.png'

export const LandingHeroSection = () => {
    const navigate = useNavigate(); 

    const handleLearnMoreClick = () => {
        navigate('/InfoHub'); // Use navigate function to redirect to InfoHub page
    };
    return (
        <div className='hero-section'>
        <div className='hero-content-left'>
            <h1>Period Slay Initiative</h1>
            <p>Empowering a world where menstrual health, education, 
            and sustainability unite harmoniously, fostering global empowerment, 
            breaking taboos, and nurturing a planet-conscious community.
            </p>

            <button className='cta-button' onClick={handleLearnMoreClick}>Learn More</button>
        </div>
        <div className="hero-right">
            <img src={heroImage} alt='Hero Image' />
        </div>
    </div>)
}
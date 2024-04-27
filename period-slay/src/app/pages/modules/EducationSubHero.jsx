import '../../components/LandingSubHero.css'
import card1 from '../../components/card1.png'
import card2 from '../../components/card2.png'
import card3 from './hygiene.png'
import card4 from './wellbeing.png'

export const EducationSubHero = () => {
    return (
        <div className="card-section">
            <div className="row">
                <div className="card">
                    <h2>Beginner’s guide</h2>
                    <img src={card1} alt="Card 1" />
                    <p>We hope this guide helps you feel prepared, 
                        confident, and empowered as you navigate this 
                        new chapter in your life.
                        Let’s get started!
                    </p>
                </div>
                <div className="card">
                    <h2>Understand Your Cycle</h2>
                    <img src={card2} alt="Card 2" />
                    <p>Having a better understanding of your cycle can
                        help you feel more in control and prepared for 
                        your periods. It can also help you plan ahead and
                        take care of yourself in the best way possible.
                        Let’s begin this journey to learn about your body 
                        and how to navigate your menstrual cycle with
                        confidence.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="card">
                    <h2>Hygiene and Care</h2>
                    <img src={card3} alt="Card 3" />
                    <p> 
                        Our community is a safe space for sharing and
                        learning from one another. We hope these stories
                        inspire and help you as you navigate your own
                        menstrual journey.
                        Dive in and connect with a supportive network of
                        peers who understand what you’re going through.
                    </p>
                </div>
                <div className="card">
                    <h2>Menstrual Health and Wellness</h2>
                    <img src={card4} alt="Card 4" />
                    <p>
                        Stay updated with the latest news and research
                        in menstrual health and discover empowering 
                        content designed to help you navigate this 
                        important part of your life with confidence.
                    </p>
                </div>
            </div>
        </div>
    );
};
import './TipsMain.css'; // Import your CSS file for styling
import Image from './ovary.png'
import Image2 from './period.png'
import Recent1 from './recent1.png'
import Recent2 from './recent2.png'

export const TipsMain = () => {
    return (
        <div className='tips-section'>
            <div className='tips-content'>
            <img src={Image} alt='Image' />
                <p>Starting your first period can be both exciting and a little nerve-wracking. You might have many questions about what to expect
                    and how to handle this experience and that’s perfectly normal.
                </p>
                <p>Everyone’s first period is different, so it’s okay if yours isn’t exactly what you expected. These tips are here to help you feel prep
                    and confident as you begin this new chapter in your life.
                </p>
                <img src={Image2} alt='Image' />
                <ol>
                    <li>
                        <h4>Be Prepared</h4>
                        <p>Keep a small supply of period products like pads or tampons in your backpack or purse.This way, you
                            will be ready when your period starts.
                        </p>
                    </li>
                    <li>
                        <h4>Track Your Cycle</h4>
                        <p>Keep a calender or use a period tracking app to note the days you have your period. 
                            This can help you predict when your next period will arrive.
                        </p>
                    </li>
                    <li>
                        <h4>Choose the Right Products</h4>
                        <p>There are various period products available such as pads, tampons, and menstrual cups. 
                            Try different options to find what feels most comfortable for you.
                        </p>
                    </li>
                    <li>
                        <h4>Stay Comfortable</h4>
                        <p>Wear comfortable clothes and consider using a heating pad to ease any cramps. 
                            Gentle exercise like walking can also help.
                        </p>
                    </li>
                    <li>
                        <h4>Stay Hydrated and Eat Well</h4>
                        <p>Drinking plenty of water and eating 
                            balanced diet meals can help ease some period symptoms.
                        </p>
                    </li>
                    <li>
                        <h4>Reach Out for Support</h4>
                        <p>If you have any questions or concerns, 
                            dont hesitate to talk to a trusted adult, such as a parent or healthcare provider.
                        </p>
                    </li>
                </ol>
                <h4>Final Note</h4>
                <p>Remember that everyone's experience with their first period is unique, and there is no right or wrong way to feel. 
                    Be kind to yourself and give yourself time to adjust to this new phase of your life. 
                    Its perfectly normal to have questions or concerns so dont hesitate to reach out to a trusted adult, healthcare provider or support.

                </p>
                <p>
                    Stay open to learning more about your body and gow to manage your period in a way that works best for you. 
                    Over time you'll become more familiar with your cycle and how to take care of yourself during this time.

                </p>
                <p>
                    Remember that menstruation is a natural part of life and a sign that your body is growing and changing. 
                    Embrace this journey with confidence and know that you're not alone, millions of girls and women around the world share this experience. You've got this!
                </p>
                <button className='msg-btn' type="submit">Take Quiz</button>

                <div className="row">
                    <div className="card">
                        <img src={Recent1} alt="Card 3" />
                        <p>Dealing with menstrual cramps?
                        These methods will make you
                        feel better. 
                        </p>
                    </div>
                    <div className="card">
                        <img src={Recent2} alt="Card 3" />
                        <p>Dealing with menstrual cramps?
                        These methods will make you
                        feel better. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
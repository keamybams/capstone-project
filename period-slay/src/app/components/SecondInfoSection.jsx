import './SecondInfoSection.css'
import Image from './calender.png'

export const SecondInfoSection = () => {
    return (<div className='image-text-section2'>
    <div className='section-content'>
        <div className='left'>
            <img src={Image} alt='Image' />
        </div>
        <div className='right'>
            <p>
                Tracking your menstrual cycle helps 
                to understand your cycle better.
                It gives control  over the reproductive
                system and helps to plan activities around the menstrual cycle.
            </p>
            <button className='btn'>Period Tracker</button>
        </div>
    </div>
</div>)
}
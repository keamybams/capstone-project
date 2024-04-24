import './SecondInfoSection.css'
import Image from './info1.png'

export const SecondInfoSection = () => {
    return (<div className='image-text-section2'>
    <div className='section-content'>

        <div className='second-left'>
            <h2>Something</h2>
            <p>
                Tracking your menstrual cycle helps 
                to understand your cycle better.
                It gives control  over the reproductive
                system and helps to plan activities around the menstrual cycle.
            </p>
        </div>
        <div className='second-right'>
            <img src={Image} alt='Image' />
        </div>
    </div>
</div>)
}
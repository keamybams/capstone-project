import './ThirdInfoSection.css'
import Image from './support.png'

export const ThirdInfoSection = () => {
    return (<div className='image-text-section2'>
    <div className='section-content'>
        <div className='left'>
            <img src={Image} alt='Image' />
        </div>
        <div className='right'>
            <p>
                Speak with a Period slay initiative
                expert to learn more and get your
                questions answered.
            </p>
            <button className='btn'>Send Us A Message</button>
        </div>
    </div>
</div>)
}
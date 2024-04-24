import './InfoSection.css'
import Image1 from './Image1.png'

export const InfoSection = () => {
    return (<div className='image-text-section'>
    <div className='heading'>
        <h2>Menstrual Health Education</h2>
    </div>
    <div className='section-content'>
        <div className='left'>
            <img src={Image1} alt='Image' />
        </div>
        <div className='right'>
            <p>
                Women and girls, as well as men
                and boys are empowered with
                knowledge about how their bodies
                work.
            </p>
            <button className='btn'>Learn More About Menstrual Health</button>
        </div>
    </div>
</div>)
}
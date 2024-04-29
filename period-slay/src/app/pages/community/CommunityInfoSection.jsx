import '../aboutus/InfoSection.css'
import Image1 from './sapphire.png'

export const CommunityInfoSection = () => {
    return (<div className='image-text-section'>
    <div className='section-content'>
        <div className='left'>
            <img src={Image1} alt='Image' />
        </div>
        <div className='right'>
            <h2>Sapphire’s Journey to Confidence</h2>
            <p>
                Sapphire, a 15 year old girl, shares her experience 
                navigating menstruation for the first time. She talks
                about her initial confusion and embarrassment and
                how she found support and guidance through the 
                website’s educational resources and community forums.
                She discusses how learning about menstrual hygiene 
                helped her feel more confident during her periods.
            </p>
           
        </div>
    </div>
</div>)
}
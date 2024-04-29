import '../aboutus/SecondInfoSection.css'
import Image from './aisha.png'

export const CommunitySecondInfoSection = () => {
    return (<div className='image-text-section2'>
    <div className='section-content'>

        <div className='second-left'>
            <h2>Aisha’s Journey to Menstrual Health</h2>
            <p>
                Aisha is a 16 year old girl from a conservative community,
                she shares her journey to understanding and managing
                her menstrual health. She discusses the misconceptions
                she faced and how the website’s resources helped her
                overcome them. Aisha emphasizes the importance of
                access to accurate information and supportive 
                communities in empowering girls like her to take control of their
                menstrual health.
            </p>
        </div>
        <div className='second-right'>
            <img src={Image} alt='Image' />
        </div>
    </div>
</div>)
}
import '../aboutus/ThirdInfoSection.css'
import Image from './ruth.png'

export const CommunityThirdInfoSection = () => {
    return (<div className='image-text-section'>
    <div className='section-content'>
        <div className='left'>
            <img src={Image} alt='Image' />
        </div>
        <div className='right'>
            <h2>Ruth’s Supportive Friendship Circle</h2>
            <p>
                Ruth, a 15 year old girl, shares the story of her supportive
                friendship circle and their journey of learning about
                menstruation together. She talks about how they used
                the website’s quizzes, articles and forums to educate 
                themselves and support each other through the ups and
                downs of puberty. She talks about the importance of having
                friends who can openly discuss menstruation without being
                judged or feeling embarrassed.
            </p>
        </div>
    </div>
</div>)
}
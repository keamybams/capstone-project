import './InfoSection.css'
import Image1 from './info1.png'

export const InfoSection = () => {
    return (<div className='image-text-section'>
    <div className='section-content'>
        <div className='left'>
            <img src={Image1} alt='Image' />
        </div>
        <div className='right'>
            <h2>Our Vision</h2>
            <p>
                This guide is a resource you can return to
                whenever you have questions or need advice.
                Remember, you’re not alone, millions of girls and
                women around the world have gone through the
                same experience. We hope this guide helps you 
                feel prepared, confident, and empowered as you
                navigate this new chapter in your life.
                Let’s get started!
            </p>
            <p>
                This guide is a resource you can return to
                whenever you have questions or need advice.
                Remember, you’re not alone, millions of girls and
                women around the world have gone through the
                same experience. We hope this guide helps you 
                feel prepared, confident, and empowered as you
                navigate this new chapter in your life.
                Let’s get started!
            </p>
        </div>
    </div>
</div>)
}
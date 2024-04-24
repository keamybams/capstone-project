import './SecondInfoSection.css'
import Image from './info1.png'

export const SecondInfoSection = () => {
    return (<div className='image-text-section2'>
    <div className='section-content'>

        <div className='second-left'>
            <h2>Our Mission</h2>
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
        <div className='second-right'>
            <img src={Image} alt='Image' />
        </div>
    </div>
</div>)
}
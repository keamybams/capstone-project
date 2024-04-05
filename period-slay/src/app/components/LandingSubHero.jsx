import './LandingSubHero.css'

export const LandingSubHero = () => {
    return (<div className='sub-hero'>
        <div className='sub-hero-content'>
            <div className='circle-container'>
                <div className='circle'>
                    <img src='module.png' alt='modules' />
                    <p>Name 1</p>
                </div>
                <div className='circle'>
                    <img src='resource.png' alt='resources' />
                    <p>Name 2</p>
                </div>
                <div className='circle'>
                    <img src='quiz.png' alt='quizzes' />
                    <p>Name 3</p>
                </div>
            </div>
        </div>
    </div>)
}
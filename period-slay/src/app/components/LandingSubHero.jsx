import './LandingSubHero.css'
import module from './module.png'
import resource from './resource.png'
import quizzes from './quiz.png'

export const LandingSubHero = () => {
    return (<div className='sub-hero'>
        <div className='sub-hero-content'>
            <div className='circle-container'>
                <div className='circle-dropdown'>
                    <div className='circle' id='pink-circle'>
                        <img src={module} alt='Image 1' />
                    </div>
                    <div className='dropdown'>
                        <button className='dropbtn' id='dropbtn-module'>Module</button>
                        <div className='dropdown-content'>
                            <a href='#'>Module 1</a>
                            <a href='#'>Module 2</a>
                            <a href='#'>Module 3</a>
                            <a href='#'>Module 4</a>
                            <a href='#'>Module 5</a>
                        </div>
                    </div>
                </div>
                <div className='circle-dropdown'>
                    <div className='circle' id='purple-circle'>
                        <img src={resource} alt='Image 2' />
                    </div>
                    <div className='dropdown'>
                        <button className='dropbtn'>Resources</button>
                    </div>
                </div>
                <div className='circle-dropdown'>
                    <div className='circle' id='pink-circle'>
                        <img src={quizzes} alt='Image 3' />
                    </div>
                    <div className='dropdown'>
                        <button className='dropbtn'>Quizzes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
import './LandingPageHeader.css'
import logo from './slaylogo.png'

export const LandingPageHeader = () => {
    return (<header className='header'>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        <div className='navbar'>
            <ul className='navmenu'>
            <li><a href="#home">Home</a></li>
            <li><a href="#home">Information Hub</a></li>
            <li><a href="#home">Privacy Policy</a></li>
            <li><a href="#home">Support</a></li>
            <li><a href="#home">About Us</a></li>
            </ul>
        </div>
        <div className='navbuttons'>
            <button className='login'>Login</button>
            <button className='signup'>Sign up</button>
        </div>
    </header>)
}
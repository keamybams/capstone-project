import './LandingPageHeader.css'

export const LandingPageHeader = () => {
    return (<header className='header'>
        <div className='logo'>Logo</div>
        <div className='navbar'>
            <ul className='navmenu'>
            <li><a href="#home">Home</a></li>
            <li><a href="#home">Information Hub</a></li>
            <li><a href="#home">Projects</a></li>
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
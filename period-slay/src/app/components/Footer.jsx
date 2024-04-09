import './Footer.css';
import logo from './slaylogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookSquare, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (<footer className='footer'>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        <div className='footer-bar'>
            <ul className='footer-menu'>
            <li><a href="#home">Home</a></li>
            <li><a href="#home">Information Hub</a></li>
            <li><a href="#home">Privacy Policy</a></li>
            <li><a href="#home">Support</a></li>
            <li><a href="#home">About Us</a></li>
            </ul>
        </div>
        <div className='footer-buttons'>
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebookSquare} />
            <FontAwesomeIcon icon={faXTwitter} />
        </div>
    </footer>)
};
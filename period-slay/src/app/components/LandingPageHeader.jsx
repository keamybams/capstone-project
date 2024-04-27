import './LandingPageHeader.css'
import logo from './slaylogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp,faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const LandingPageHeader = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [showMenu, setShowMenu] = useState(false);

    const toggleDropdown = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const toggleMobileMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className='header'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className={`navbar ${showMenu ? 'show-menu' : ''}`}> {/* Conditional class for mobile menu */}
                <button className="menu-icon" onClick={toggleMobileMenu}> {/* Menu icon button for mobile */}
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <ul className={`navmenu ${showMenu ? 'show-menu' : ''}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#community">Community</a></li>
                    <li><a href="#contact-us">Contact us</a></li>
                    <li>
                        <div className='dropdown'>
                            <button className='dropbtn' onClick={() => toggleDropdown(1)}><Link to="/Education">Education</Link></button>
                            <FontAwesomeIcon icon={openIndex === 1 ? faAngleUp : faAngleDown} />
                            <div className={`dropdown-content ${openIndex === 1 ? 'show' : ''}`}>
                                <a href='#'>Beginner's Guide</a>
                                <a href='#'>Menstrual Cycle</a>
                                <a href='#'>Hygiene and Care</a>
                                <a href='#'>Health Tips</a>
                                <a href='#'>Quizzes</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='dropdown'>
                            <button className='dropbtn' onClick={() => toggleDropdown(2)}>Resources</button>
                            <FontAwesomeIcon icon={openIndex === 2 ? faAngleUp : faAngleDown} />
                            <div className={`dropdown-content ${openIndex === 2 ? 'show' : ''}`}>
                                <a href='#'>Education Videos</a>
                                <a href='#'>Books</a>
                                <a href='#'>Articles</a>
                                <a href='#'>External Link to PDFs</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </header>)
}
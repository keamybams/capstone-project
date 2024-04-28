import './SignUpModal.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export const SignUpModal = ({ onClose }) => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="signup-modal">
            <div className='modal-wrap'>
            <div className="signup-modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Join Period Slay Initiative!</h2>
                <button className="google-signup" id='email-signup'>
                    <FontAwesomeIcon icon={faGoogle} className='social-icon'/>
                    Sign Up with Google
                </button>
                <button className="apple-signup" id='email-signup'>
                    <FontAwesomeIcon icon={faApple} className='social-icon' />
                    Sign Up with Apple
                </button>
                <div className='or'>
                    <hr className="divider" />
                    <p>or</p>
                    <hr className="divider" />
                </div>
                
                <form className='signup-form'>
                    <label htmlFor="pmail">Email</label>
                    <input type="email" placeholder="Name@example.com" />
                    <label htmlFor="password">Password</label>
                    <div className="password-input">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="*********" 
                        id='password'
                    />
                    <span className="toggle-password" onClick={togglePasswordVisibility}>
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </span>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already have an account? <a href="/login">Log in</a></p>
            </div>
            </div>
        </div>
    );
};

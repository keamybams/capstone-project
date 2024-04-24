import './SignUpModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';

export const SignUpModal = ({ onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Sign Up</h2>
                <button className="google-signup" id='email-signup'>
                    <FontAwesomeIcon icon={faGoogle} />
                    Sign Up with Google
                </button>
                <button className="apple-signup" id='email-signup'>
                    <FontAwesomeIcon icon={faApple} />
                    Sign Up with Apple
                </button>
                <hr className="divider" />
                <form className='signup-form'>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already have an account? <a href="/login">Log in</a></p>
            </div>
        </div>
    );
};

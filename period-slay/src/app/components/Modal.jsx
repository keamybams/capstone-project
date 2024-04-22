import './Modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Modal = ({ showModal, closeModal }) => {
    return (
        showModal && (
            <div className="modal">
                <FontAwesomeIcon icon={faTimes} className="close-btn" onClick={closeModal} />
                <div className="modal-content">
                    <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
                    <p>Submission successful</p>
                </div>
            </div>
        )
    );
};
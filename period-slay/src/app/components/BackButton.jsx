import './BackButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const BackButton = () => {
    return (
        <Link to="#" onClick={() => window.history.back()} className="back-button">
            <FontAwesomeIcon icon={faAngleLeft} />
            <span>Back</span>
        </Link>

    );
};
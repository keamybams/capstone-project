import { useState } from 'react';
import './ContactUsSection.css';
import { Modal } from './Modal';

export const ContactUsSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, such as sending data to a server
        console.log('Form submitted:', { name, email, message });
        // Clear form fields after submission
        setName('');
        setEmail('');
        setMessage('');
        setShowModal(true);
        // Hide the modal after 3 seconds (3000 milliseconds)
        setTimeout(() => {
            setShowModal(false);
        }, 6000);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="contact-us-section">
            <h2>Contact Us</h2>
            <p>Have questions about how to partner with our Foundation? We would love to hear from you.</p>
            <form className='contact-form' onSubmit={handleSubmit}>
                <div className='input-section'>
                <div className="form-group">
                    <h3>Kindly input your details here</h3>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Tell us what you want to know</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                </div>
                <button className='msg-btn' type="submit">Submit your request</button>
            </form>

            <Modal showModal={showModal} closeModal={closeModal} />
        </div>
    );
};


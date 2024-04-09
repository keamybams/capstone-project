import { useState } from 'react';
import './FaqSection.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export const FaqSection = () => {
    // State to manage which dropdown is currently open
    const [openIndex, setOpenIndex] = useState(null);

    // Function to toggle the dropdown
    const toggleDropdown = (index) => {
        if (openIndex === index) {
            setOpenIndex(null); 
        } else {
            setOpenIndex(index); 
        }
    };

    // FAQ data
    const faqs = [
        { question: 'When will I get my first period?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu massa condimentum, sodales augue tincidunt, congue massa. Duis elementum justo non dolor dictum, sed sagittis eros aliquam.' },
        { question: 'What are some signs that my period is coming?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu massa condimentum, sodales augue tincidunt, congue massa. ' },
        { question: 'How do I prepare for my first period?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu massa condimentum, sodales augue tincidunt, congue massa. Duis elementum justo non dolor dictum, sed sagittis eros aliquam.' },
        { question: 'How do i manage menstrual pain?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu massa condimentum, sodales augue tincidunt, congue massa. Duis elementum justo non dolor dictum, sed sagittis eros aliquam.' },
        { question: 'Can I still do sports and activities during my period?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu massa condimentum, sodales augue tincidunt, congue massa. Duis elementum justo non dolor dictum, sed sagittis eros aliquam.' },
        { question: 'How do I talk to my parent about menstruation?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu massa condimentum, sodales augue tincidunt, congue massa. Duis elementum justo non dolor dictum, sed sagittis eros aliquam.' },
        { question: 'Is it okay to talk to my friends about period?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu massa condimentum, sodales augue tincidunt, congue massa. Duis elementum justo non dolor dictum, sed sagittis eros aliquam.' },
        { question: 'What if  I have questions and concerns about my menstrual health?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu massa condimentum, sodales augue tincidunt, congue massa. Duis elementum justo non dolor dictum, sed sagittis eros aliquam.' },
    ];

    return (
        <div className='faq-section'>
            <div className='faq-header'>
            <h2>Frequently Asked Questions</h2>
            <p>Discover more about menstrual health through our frequently asked questions. 
                If you have additional inquiries, feel free to reach out to us for personalized 
                assistance.
            </p>
            </div>
            <div className='faq-list'>
                {faqs.map((faq, index) => (
                    <div key={index} className='faq-item'>
                        <button
                            className='question'
                            onClick={() => toggleDropdown(index)}
                        >
                            {faq.question}
                            <FontAwesomeIcon icon={openIndex === index ? faAngleUp : faAngleDown} />
                        </button>
                        {openIndex === index && (
                            <div className='answer'>{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};


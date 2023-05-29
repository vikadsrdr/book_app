import React from 'react';
import './Contact.css';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Header/Navbar';


const Contact = () => {
    const navigate = useNavigate();

    return (

        <section className="contact">
            <Navbar />

            <button
                style={{ color: 'var(--color-accent)' }}
                onClick={() => navigate('/')}>
                <KeyboardBackspaceOutlinedIcon />
            </button>
            <div className="contact-wrapper">

                <div className="contact-item">
                    <div className="contact-item-icon">
                        <i className="bi bi-house-fill"></i>
                        Address
                    </div>
                    <p className="contact-item-text">Minsk, Belarus</p>
                </div>
                <div className="contact-item">
                    <div className="contact-item-icon">
                        <i className="bi bi-telephone-fill"></i>
                        Phone
                    </div>
                    <p className="contact-item-text">+375(33)330-15-24</p>
                </div>
                <div className="contact-item">
                    <div className="contact-item-icon">
                        <i className="bi bi-envelope-fill"></i>
                        Email
                    </div>
                    <p className="contact-item-text">react_app@gmail.com</p>
                </div>
            </div>
            <form onSubmit={e => e.preventDefault()} className="contact-form">
                <h2 className="contact-form-title">Contact Us Form</h2>
                <div className="contact-input-wrapper">
                    <input type="text" placeholder="Name *" />
                    <input type="text" placeholder="Subject *" />
                    <input type="text" placeholder="Email *" />
                </div>
                <textarea
                    placeholder="Your Message *"
                    className="contact-textarea"
                    rows="5"
                ></textarea>
                <button className="contact-btn">Send</button>
            </form>
        </section>
    );

};

export default Contact;
import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Simulate form submission (you can replace this with actual form submission logic)
        console.log('Form submitted!', { name, email, message });
        alert('Thank you for contacting us! We will get back to you shortly.');
        // Clear the form
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container1">
            <br/>
            <h1>Contact Us</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <label htmlFor="message">Message:</label>
                <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    required 
                ></textarea>
                <button type="submit">Send</button>
            </form>
            <div className="support-info">
                <h2>Support Information</h2>
                <p><strong>Email:</strong> divyasribarmavath@gmail.com</p>
                <p><strong>Phone:</strong> +91 8309143324</p>
                <p><strong>Follow us on:</strong></p>
                <div className="social-media">
                    <a href="https://facebook.com/iplllm" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com/iplllm" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://linkedin.com/company/iplllm" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

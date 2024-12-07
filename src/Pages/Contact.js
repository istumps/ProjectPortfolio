import React, { useState } from 'react';
import './CSS/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted. Thank you!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>Feel free to reach out for collaborations, questions, or to just to say hello!</p>
      </div>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
            required
          />
          <button type="submit" className="submit-btn">Send</button>
        </form>
        <div className="social-links">
          <h2>Connect with me</h2>
          <a href="https://www.linkedin.com/in/isaac-stumps-432451233/" target="_blank" rel="noopener noreferrer">
          <span className="social-btn">LinkedIn</span>
        </a>
        <a href="https://github.com/istumps" target="_blank" rel="noopener noreferrer">
          <span className="social-btn">GitHub</span>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

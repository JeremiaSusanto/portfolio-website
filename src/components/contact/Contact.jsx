import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Google Apps Script Web App URL (replace with your actual URL)
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw9weAVXcb6dnhTQL5Ozxn5iJ0BSi9Ns9jetN0sBYr9c0mNz7y8EUmyJA7V3y-WJz3d/exec';
      
      // Prepare data for Google Sheets
      const submissionData = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'No Subject',
        message: formData.message,
        timestamp: new Date().toLocaleString('id-ID', {
          timeZone: 'Asia/Jakarta',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      };

      // Send to Google Sheets via Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      // Since we're using no-cors mode, we can't read the response
      // But we'll assume success if no error is thrown
      console.log('Form data sent to Google Sheets:', submissionData);
      
      setSubmitStatus('Message sent successfully! Your message has been saved and I\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending to Google Sheets:', error);
      setSubmitStatus('Error sending message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Don't be shy !</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I'm always open to discussing academic projects, 
            programming collaborations, or opportunities in data science and web development.
          </p>

          <div className="contact__info-item">
            <div className="contact__info-icon">
              <i className="icon-location-pin"></i>
            </div>
            <div>
              <h4 className="contact__info-title">Address</h4>
              <p className="contact__info-desc">Bandar Lampung, Indonesia</p>
            </div>
          </div>

          <div className="contact__info-item">
            <div className="contact__info-icon">
              <i className="icon-envelope"></i>
            </div>
            <div>
              <h4 className="contact__info-title">Email</h4>
              <p className="contact__info-desc">jeremia.122450022@student.itera.ac.id</p>
            </div>
          </div>

          <div className="contact__social">
            <a 
              href="https://www.linkedin.com/in/jeremia-susanto-278655354/" 
              className="contact__social-link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a 
              href="https://github.com/JeremiaSusanto" 
              className="contact__social-link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a 
              href="https://instagram.com/jeremia_s_" 
              className="contact__social-link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name *" 
                className="form__control"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form__input-div">
              <input 
                type="email" 
                name="email"
                placeholder="Your Email *" 
                className="form__control"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <div className="form__input-div">
            <input 
              type="text" 
              name="subject"
              placeholder="Your Subject" 
              className="form__control"
              value={formData.subject}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="form__input-div">
            <textarea 
              name="message"
              placeholder="Your Message *" 
              className="form__control textarea"
              rows="6"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          {submitStatus && (
            <div className={`form__status ${submitStatus.includes('Error') ? 'form__status--error' : 'form__status--success'}`}>
              {submitStatus}
            </div>
          )}
          
          <button 
            className="btn contact__btn" 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
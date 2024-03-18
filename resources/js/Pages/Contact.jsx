import React, { useState } from 'react';
import ContactInfo from '@/Components/ContactInfo';

export default function Contact() {
  // State to manage the user inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Any question or remarks? Just write us a message!</p>
      <div className="contact-panel">
        <ContactInfo />
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group-input">
            <label htmlFor="firstName">First Name:</label><br />
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-input">
            <label htmlFor="lastName">Last Name:</label><br />
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-input">
            <label htmlFor="email">Email:</label><br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-input">
            <label htmlFor="phoneNumber">Phone Number:</label><br />
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group-options">
            <p>Select a subject:</p>
            <input 
              type="checkbox"
              id="cb1"
              required
            />
            <label htmlFor="cb1">General inquiry</label>
            <input 
              type="checkbox"
              id="cb2"
              required
            />
            <label htmlFor="cb2">Technical inquiry</label>
            <input 
              type="checkbox"
              id="cb3"
              required
            />
            <label htmlFor="cb3">Billing inquiry</label>
            <input 
              type="checkbox"
              id="cb4"
              required
            />
            <label htmlFor="cb4">Other</label>
          </div>

          <div className="form-group-area">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import './contact.css';

function Contact({ isDarkMode }) {
  const initialFormData = {
    name: '',
    email: '',
    projectTitle: '',
    description: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xaygrdak', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Form submitted successfully!');
        setIsSubmitted(true);
        setFormData(initialFormData); // Reset form data
      } else {
        console.error('Form submission Failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className={`contact-page ${isDarkMode ? 'dark' : 'light'}`}>
      <h2>Contact Me</h2>
      {isSubmitted ? (
        <p>Your message has been submitted successfully!</p>
      ) : (
        <>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className='label' htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label className='label' htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label className='label' htmlFor="projectTitle">Project Title:</label>
            <input
              type="text"
              id="projectTitle"
              name="projectTitle"
              value={formData.projectTitle}
              onChange={handleChange}
              required
            />
            <label className='label' htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
          <p>
            Powered by{' '}
            <a
              href="https://formspree.io/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'red' }}
            >
              FormSpree
            </a>
          </p>
        </>
      )}
    </div>
  );
}

export default Contact;

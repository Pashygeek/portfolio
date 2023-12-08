import React from 'react'
import "./contact.css"

function Contact({ isDarkMode }) {
  return (
    <div className={`contact-page ${isDarkMode ? 'dark' : 'light'}`}>
     <h2>Contact me today with this...... !</h2>
    </div>
  )
}

export default Contact

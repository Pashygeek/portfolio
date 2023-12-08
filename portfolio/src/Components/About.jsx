import React from 'react'
import "./about.css"

function About({ isDarkMode }) {
  return (
    <div className={`about-page ${isDarkMode ? 'dark' : 'light'}`}>
      <h2>About me</h2>
      <h1>In this i will tell you more about me</h1>
    </div>
  )
}

export default About

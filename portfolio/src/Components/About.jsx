import React, { useEffect, useState } from 'react';
import './about.css';
import { FaReact, FaDatabase, FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
import { DiRuby } from 'react-icons/di';

function About({ isDarkMode }) {
  const [showSlideInText, setShowSlideInText] = useState(false);

  useEffect(() => {
    setShowSlideInText(true);
  }, []);

  // Sample skills and languages data
  const frontendSkills = ['Responsive Web Design', 'Web Frameworks', 'HTML5', 'CSS3', 'JavaScript'];
  const backendSkills = ['Authentication and Authorization', 'RESTful API Design', 'Database Management'];
  const otherSkills = ['Git', 'UI/UX Design', 'Problem Solving and Debugging', 'Punctual', 'Teamwork Coorperative'];

  const languages = [
    { name: 'HTML5', icon: <FaHtml5 />, bgColor: '#e34c26' },
    { name: 'JavaScript', icon: <FaJs />, bgColor: '#f0db4f' },
    { name: 'CSS3', icon: <FaCss3 />, bgColor: '#1572b6' },
    { name: 'React.js', icon: <FaReact />, bgColor: '#61dafb' },
    { name: 'Ruby', icon: <DiRuby />, bgColor: '#cc0000' },
    { name: 'Ruby on Rails', icon: <DiRuby />, bgColor: '#cc0000' },
    { name: 'SQLITE3', icon: <FaDatabase />, bgColor: '#336791' },
    { name: 'POSTGRES', icon: <FaDatabase />, bgColor: '#336791' },
  ];

  return (
    <div className={`about-page ${isDarkMode ? 'dark' : 'light'}`}>
      {showSlideInText && (
        <div className={`slide-in-text ${isDarkMode ? 'dark' : 'light'}`}>
          <p>Hello there,</p>
          <p>Thank you for considering to know more about me</p>
          <p>Let's get started</p>
        </div>
      )}
      <div className="about-content">
        <p>
          Welcome to my world! I'm a passionate web developer with a knack for
          creating stunning and user-friendly websites. My journey in the world
          of coding began several years ago, and since then, I've been on a
          constant quest for knowledge and improvement.
        </p>

        {/* Skills Section */}
        <div className="skills-section">
          <h2>Skills</h2>
          <div className="skill-categories">
            <div className="skill-category">
              <h3 className='skill-header'>Frontend</h3>
              <ul>
                {frontendSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="skill-category-divider"></div>
            <div className="skill-category">
              <h3 className='skill-header'>Backend</h3>
              <ul>
                {backendSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="skill-category-divider"></div>
            <div className="skill-category">
              <h3 className='skill-header'>Other</h3>
              <ul>
                {otherSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* End of Skills Section */}

        {/* Languages Section */}
        <div className="languages-section">
          <h2>Languages</h2>
          <ul>
            {languages.map((language, index) => (
              <li key={index} style={{ backgroundColor: language.bgColor }}>
                {language.icon}
                {language.name}
              </li>
            ))}
          </ul>
        </div>
        {/* End of Languages Section */}
      </div>
    </div>
  );
}

export default About;

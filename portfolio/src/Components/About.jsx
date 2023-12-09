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
  const backendSkills = ['Authentication and Authorization', 'RESTful API Design', 'Database Management', 'Web Frameworks'];
  const otherSkills = ['Git', 'UI/UX Design', 'Problem Solving and Debugging', 'Punctual', 'Teamwork Coorperative'];

  const languages = [
    { name: 'HTML5', icon: <FaHtml5 />, bgColor: '#e34c26', link: 'https://html.com/' },
    { name: 'JavaScript', icon: <FaJs />, bgColor: '#f0db4f', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'CSS3', icon: <FaCss3 />, bgColor: '#1572b6', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'React.js', icon: <FaReact />, bgColor: '#61dafb', link: 'https://reactjs.org/' },
    { name: 'Ruby', icon: <DiRuby />, bgColor: '#cc0000', link: 'https://www.ruby-lang.org/en/' },
    { name: 'Ruby on Rails', icon: <DiRuby />, bgColor: '#cc0000', link: 'https://rubyonrails.org/' },
    { name: 'SQLITE3', icon: <FaDatabase />, bgColor: '#336791', link: 'https://www.sqlite.org/' },
    { name: 'POSTGRES', icon: <FaDatabase />, bgColor: '#336791', link: 'https://www.postgresql.org/' },
  ];

  const handleLanguageClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className={`about-page ${isDarkMode ? 'dark' : 'light'}`}>
      {showSlideInText && (
        <div className={`slide-in-text ${isDarkMode ? 'dark' : 'light'}`}>
          <p>Hello there,</p>
          <p>Thank you for considering to know more about me</p>
          <p>Well, let's get started...👩‍💻</p>
        </div>
      )}
      <div className="about-content">
      <p className='about-para'>
        Welcome! I'm Patience, a web developer passionate about crafting stunning and user-friendly websites.
        My coding journey started a while back, leading me on a continuous quest for improvement.
        Like a digital alchemist, I turn complex ideas into seamless experiences.
        Beyond coding, you might find me exploring the cosmos or debating with my arch-nemesis, the elusive
        semicolon. Join me on this cosmic coding adventure, where innovation knows no bounds! 🚀✨
      </p>

        {/* Skills Section */}
        <div className="skills-section">
          <h2 className='skill-mainhd'>Skills</h2>
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
              <li
                key={index}
                style={{ backgroundColor: language.bgColor }}
                onClick={() => handleLanguageClick(language.link)}
              >
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

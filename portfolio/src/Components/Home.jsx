import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/portfolio-image.png';
import about from '../assets/about-me.png';
import "./home.css"

function Home() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello there,</span>
        <span className="introText">
          I'm<span className="introName"> Patience</span> <br />A Web Developer
        </span>
        <p className="introPara">I'm a sophisticated Website Developer ready to meet all your website desire needs.</p>
         <p className='introPara'>Want to learn more about me, click on the About me button below .</p>
        <Link to="/about">
          <button className="btn">
            <img src={about} alt="about" className='about-img' />
            About me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Home;

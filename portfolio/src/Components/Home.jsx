import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/portfolio-image.png';
import about from '../assets/about-me.png';
import reviewsimg from "../assets/reviews.png"
import './home.css';
import Review from './Review';
import avatar1 from '../assets/portfolio-avatar1.jpg';
import avatar2 from '../assets/portfolio-avatar2.webp';
import avatar3 from "../assets/MC OGA 1.jpg"

function Home() {
  const reviews = [
    {
      id: 1,
      avatar: avatar1,
      name: 'John M',
      review: 'I had a great experience working with Patience. The website turned out amazing!',
    },
    {
      id: 2,
      avatar: avatar2,
      name: 'Mary Kelley',
      review: 'From functionality, to creativity, Patience created for me a website that not only stood out but attracted more customers!',
    },
    {
      id: 3,
      avatar: avatar3,
      name: 'Mc OGA',
      review: 'Even though mine was UI/UX design and not the full website, Patience created for me such an amazing design for my website!',
    },
    {
      id: 4,
      avatar: avatar2,
      name: ' Jake',
      review: 'I may not be a client but working with Patience was such a beautiful experience.She showed dedication and determination which lack in many teammates.',
    },
  ];

  const [visibleReviews, setVisibleReviews] = useState(0);

  const handleNextClick = () => {
    setVisibleReviews((prev) => (prev + 1) % reviews.length);
  };

  const handlePrevClick = () => {
    setVisibleReviews((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleReviewsClick = () => {
    // Scroll to or focus on the reviews section
    const reviewsSection = document.getElementById('reviews');
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const canShowNext = reviews.length > visibleReviews + 3;
  const canShowPrev = visibleReviews > 0;

  // Typing effect
  const introText = "A Web Developer";
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText((prev) => introText.slice(0, index + 1));
      index += 1;
      if (index === introText.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          setIsTypingComplete(true);
        }, 500)
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello there,</span>
        <span className="introText">
          I'm<span className="introName"> Patience</span> <br />
          {typedText}{isTypingComplete && <span className='blinking-cursor'>|</span>}
        </span>
        <p className="introPara">I'm a sophisticated Website Developer ready to meet all your website desire needs.</p>
        <p className="introPara2">Want to learn more about me, click on the About me button below or click on the client reviews button
         to see reviews from different clients .</p>
        <div className='button-container'>
        <Link to="/about">
          <button className="btn">
            <img src={about} alt="about" className="about-img" />
            About me
          </button>
        </Link>
        <Link to="#reviews">
        <button className='btn' onClick={handleReviewsClick}>
          <img src={reviewsimg} alt='reviews' className='about-img' />
          <span>Client Reviews</span>
        </button>
        </Link>
        </div>
      </div>
      <img src={bg} alt="Profile" className="bg" />

      {/* Client review section */}
      <section id="reviews" className="reviews">
        <h2>Client Reviews</h2>
        <div className="review-container">
          {reviews.slice(visibleReviews, visibleReviews + 3).map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
        {canShowPrev && (
          <button className="review-nav-btn" onClick={handlePrevClick}>
            {'<'}
          </button>
        )}
        {canShowNext && (
          <button className="review-nav-btn" onClick={handleNextClick}>
            {'>'}
          </button>
        )}
      </section>
    </section>
  );
}

export default Home;

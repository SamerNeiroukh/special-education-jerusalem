import React, { useState, useEffect } from 'react';
import './HomePage.css';
import logo from '../assets/logo.jpg';
import circle1 from '../assets/circledBlue.jpg';
import circle2 from '../assets/circledYellow.jpg';
import circle3 from '../assets/circledRed.jpg';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const images = [
  require('../assets/photo1.png'),
  require('../assets/photo2.png'),
  require('../assets/photo3.png'),
  require('../assets/photo4.png'),
  require('../assets/photo5.png'),
  require('../assets/photo6.png'),
  require('../assets/photo7.png'),
];

const HomePage = ({ scrollToContact }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000); // Transition duration
    }, 10000); // 10 seconds interval for each image
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollToContact) {
      document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollToContact]);

  return (
    <div className="home-page">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
      </header>
      <NavBar /> {/* Include the NavBar component */}
      <div className={`background ${fade ? 'fade-in' : 'fade-out'}`}
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        {/* Background image div */}
      </div>
      <div className="whoAreWe">
        <h1>מי אנחנו</h1>
        <p>
          מערך ההדרכה של החינוך המיוחד במחוזות ירושלים והעיר ירושלים כולל כ 50 מדריכים בתחומי דעת וסוגי אוכלוסיות מגוונים בהתאם לצרכי השדה. החומרים באתר זה נאספים ומאורגנים על ידי צוות המדריכים
        </p>
      </div>
      <div className="image-buttons-section">
        <div className="image-buttons">
          <div className="image-button" onClick={() => window.location.href='/page1'}>
            <img src={circle1} alt="Blue Circle" />
            <span className="button-label">תכנים להורים</span>
          </div>
          <div className="image-button" onClick={() => window.location.href='/page2'}>
            <img src={circle2} alt="Yellow Circle" />
            <span className="button-label">מעני הדרכה נוספים בזמן המלחמה</span>
          </div>
          <div className="image-button" onClick={() => window.location.href='/page3'}>
            <img src={circle3} alt="Red Circle" />
            <span className="button-label">למידה בשעת חירום</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
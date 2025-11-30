import React from 'react';
import './Header.css';
import profilePic from '../assets/profile.png';

const Header = () => {
  return (
    <header className="header-container">
      <div className="profile-section">
        <img src={profilePic} alt="Bishal Profile" className="profile-img" />
        
        <div className="profile-text">
          <h2>Hello, I'm MD RUHUL AMIN BISHAL</h2>
          <p>Undergraduate Student of AI and Big Data at Woosong University.</p>
          <a href="mailto:ruhulbiahal@gmail.com" className="contact-btn">Email Me</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import './SocialLinks.css';
import socialData from '../data/socialData';

const SocialLinks = () => {
  return (
    <section className="social-section">
      <h2>Connect with Me</h2>
      <div className="social-container">
        {socialData.map((item) => (
          <a
            key={item.id}
            href={item.link}
            // Adds a specific class like "social-box youtube" or "social-box x"
            className={`social-box ${item.platform.toLowerCase()}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon-wrapper">
              <i className={item.icon}></i>
            </div>
            <span className="handle-text">{item.handle}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
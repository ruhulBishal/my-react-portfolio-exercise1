import React from 'react';
import './Navbar.css';
import logoImage from '../assets/logo.png'; // Make sure logo.png is in src/assets/

const Navbar = () => {
  const menuData = [
    { id: 1, title: 'Home', link: '#home' },
    { id: 2, title: 'About', link: '#about' },
    { id: 3, title: 'Portfolio', link: '#portfolio' },
    { id: 4, title: 'Contact', link: '#contact' }
  ];

  return (
    <nav className="navbar">
      {/* Replaced text with the imported image */}
      <div className="logo">
        <img src={logoImage} alt="Bishal Dev Logo" className="logo-img" />
      </div>
      
      <ul className="nav-menu">
        {menuData.map((item) => (
          <li key={item.id} className="nav-item">
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <Link to="/">
        <button className="home-button">Home</button>
      </Link>
    </div>
  );
};

export default Footer;

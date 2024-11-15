// Footer.js
import React from 'react';
import './App.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Manchester United FC Present & Past</h3>
          <img src="/icons/icons144.png" alt="Manchester United FC Logo" className="footer-image" />
          <img src="/pl.png" alt="Premier League Logo" className="pl-image" />
          <img src="/adidas.png" alt="Premier League Logo" className="pl-image" />
          <p>Made with care by Tino Kaseke</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#players">Current Players</a></li>
            <li><a href="#legends">Legends</a></li>
            <li><a href="#fixtures">Fixtures</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Manchester United FC Past & Present. All rights reserved.</p>
      </div>
    </footer>
  );
}
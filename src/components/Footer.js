import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../componentcss/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3 className="footer-heading">Contact Us</h3>
          <p className="footer-text">Satnampura, Phagwara, Punjab</p>
          <p className="footer-text">Phone: 1234567890</p>
          <p className="footer-text">Email: silverspoon@gmail.com</p>
        </div>
        <div className="footer-social">
          <h3 className="footer-heading">Follow Us</h3>
          <ul className="footer-social-list">
            <li className="footer-social-item">
              <a href="www.facebook.com" className="footer-social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="footer-social-item">
              <SocialIcon url="https://linkedin.com/in/jaketrent" />
            </li>
            <li className="footer-social-item">
              <a href="#" className="footer-social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">&copy; Silver Spoon. All rights reserved by Durgesh Kumar.</p>
      </div>
    </footer>
  );
};

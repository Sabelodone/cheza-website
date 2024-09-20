import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        <div className="row">
          {/* Logo and Contact Information */}
          <div className="col-md-3 col-sm-6 d-flex align-items-center">
            <div className="logo-overlay-wrapper">
              <img src="/logo.jpg" alt="Company Logo" className="footer-logo" />
              <div className="logo-overlay"></div>
            </div>
            <ul className="list-unstyled ml-3">
              <li><FontAwesomeIcon icon={faMapMarkerAlt} /> S$B House 7 Loveday Street, MarshallTown, Johannesburg 2107</li>
              <li><FontAwesomeIcon icon={faPhone} /> (011) 339-4439/ 1000</li>
              <li><FontAwesomeIcon icon={faEnvelope} /> Mosima@chezatravel.com <br />info@chezatravel.com</li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="col-md-3 col-sm-6">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#book">Book</a></li>
            </ul>
          </div>
          {/* Social Media Links */}
          <div className="col-md-3 col-sm-6">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /> Facebook</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
              <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn</a></li>
            </ul>
          </div>
          {/* Newsletter Subscription */}
          <div className="col-md-3 col-sm-6">
            <h5>Newsletter</h5>
            <form>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <button type="submit" className="btn btn-primary mt-2">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <p>&copy; Tech<span className="highlight">Artistry</span> Design. All Rights Reserved. <FontAwesomeIcon icon={faHeart} /></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

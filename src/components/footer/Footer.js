"use client";

import "./footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about-section">
          <h3>About Us</h3>
          <p>
            Welcome to our restaurant! We offer a wide range of delicious dishes
            and provide the best dining experience.
          </p>
        </div>

        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
            <li>Our Restaurants</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <FaMapMarkerAlt /> 123 Food Street, Food City
            </li>
            <li>
              <FaPhoneAlt /> +123 456 789
            </li>
            <li>
              <FaEnvelope /> info@restaurant.com
            </li>
          </ul>
        </div>

        <div className="footer-section opening-hours-section">
          <h3>Opening Hours</h3>
          <ul>
            <li>Mon - Fri: 8:00 AM - 10:00 PM</li>
            <li>Sat - Sun: 9:00 AM - 11:00 PM</li>
          </ul>
        </div>

        <div className="footer-section social-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="social-icon" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="social-icon" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="social-icon" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>

        <div className="footer-section payment-section">
          <h3>Our Payment Systems</h3>
          <div className="payment-icons">
            <img
              src="images/paypal.png"
              alt="PayPal"
              className="payment-icon"
            />
            <img src="images/mtn.png" alt="MTN MoMo" className="payment-icon" />
            <img src="images/btc.jpeg" alt="Bitcoin" className="payment-icon" />
            <img
              src="images/visacard.jpeg"
              alt="Visa"
              className="payment-icon"
            />
            <img
              src="images/mastercard.png"
              alt="MasterCard"
              className="payment-icon"
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Lead Web. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

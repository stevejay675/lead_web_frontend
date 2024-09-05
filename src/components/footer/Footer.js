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

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section contact-section">
        <h3>Contact Us</h3>
        <ul>
          <li>
            <FaMapMarkerAlt /> Iya Avenue, Great Soppo Buea
          </li>
          <li>
            <FaPhoneAlt /> +237674081245
          </li>
          <li>
            <FaEnvelope /> info@loopeats.com
          </li>
        </ul>
      </div>

      

      <div className="footer-section appdownload-and-payment">
        <div className="download-app">
          <h3>Download Our App</h3>
          <div className="app-badges">
            <img
              src="images/AppStoreBadge.svg"
              alt="Download on the App Store"
              className="app-icon"
            />
            <img
              src="images/google-play-badge.png"
              alt="Get it on Google Play"
              className="app-icon"
            />
          </div>
        </div>

        <div className="payment-section">
          <h3>Our Payment Systems</h3>
          <div className="payment-icons">
            <img
              src="images/paypal.png"
              alt="PayPal"
              className="payment-icon"
            />
            <img src="images/mtn.png" alt="MTN MoMo" className="payment-icon" />
            <img
              src="images/orange.png"
              alt="orange"
              className="payment-icon"
            />
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

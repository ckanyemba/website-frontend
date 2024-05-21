import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTiktok,
  faWhatsapp,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <marquee behavior="alternate" direction="up">
          <div className="STYLESTASH">
            <h2>Street Style Stash</h2>
            <p>
              Street Style Stash is a dynamic, trend-setting private company
              deeply entrenched in the fashion and accessories industry. With an
              ethos grounded in creativity, individuality, and innovation,
              Street Style Stash curates a diverse array of Contemporary, footwear,
              and accessories that reflect the ever-evolving landscape of street
              fashion.
            </p>
          </div>
        </marquee>

        <div>
          <h2>Follow us</h2>
          <div className="social-icons-container">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            <FontAwesomeIcon icon={faYoutube} size="2x" />
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <fontAwesomeIcon icon={faWhatsapp} size="2x" />
          </div>
          <div>
            <div className="logoImg">
              <img src="./logo.png" alt="Logo" />
            </div>
          </div>
        </div>
        <div className="Quicklinks">
          <h2>Quick links</h2>
          <div className="footer-section-links">
            <div>
              <Link to="/">Books</Link>
            </div>
            <div>
              <Link to="/ForthriftCollection">Audiobooks</Link>
            </div>
            <div>
              <Link to="/ForjewelleryCollection">Ebooks</Link>
            </div>
            <div>
              <Link to="/Returns">Returns and Refunds</Link>
            </div>
            <div>
              <Link to="/Terms">Terms of Service</Link>
            </div>
          </div>
        </div>
 

      </div>
    </footer>
  );
};

export default Footer;

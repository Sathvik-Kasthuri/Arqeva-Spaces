
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <img
            src="/images/arqeva-logo.png"
            alt="Arqeva Spaces"
          />
          <p>
            Thoughtful spaces. Professional execution.
            Interior and exterior solutions for residential
            and commercial projects.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#process">Our Process</a>
          <a href="#why-us">Why Arqeva</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <a href="tel:+919381860121">
            <Phone size={16} /> +91 93818 60121
          </a>
          <a href="mailto:arqevaspaces@gmail.com">
            <Mail size={16} /> arqevaspaces@gmail.com
          </a>
          <p>
            <MapPin size={16} /> Hyderabad, Telangana, India
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Arqeva Spaces. All rights reserved.</p>

        <a href="#home" className="back-to-top">
          Back to Top <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

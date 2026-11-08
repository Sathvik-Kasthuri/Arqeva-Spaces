
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight
} from "lucide-react";

import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <span className="section-label">LET'S CONNECT</span>
          <h2>Let's Build Something Meaningful.</h2>
          <p>
            Have a space in mind? Tell us about your project.
            We'd be happy to discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p className="contact-info-text">
              Connect with our team to discuss your interior
              or exterior execution requirements.
            </p>

            <div className="contact-person">
              <h4>Vamshi Errolla</h4>
              <a href="tel:+919381860121">
                <Phone size={17} />
                +91 93818 60121
              </a>
              <a
                href="https://wa.me/919381860121"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
            </div>

            <div className="contact-person">
              <h4>Praveen Rejeti</h4>
              <a href="tel:+916281097622">
                <Phone size={17} />
                +91 62810 97622
              </a>
              <a
                href="https://wa.me/916281097622"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
            </div>

            <div className="contact-detail">
              <Mail size={19} />
              <a href="mailto:arqevaspaces@gmail.com">
                arqevaspaces@gmail.com
              </a>
            </div>

            <div className="contact-detail">
              <MapPin size={19} />
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>

          <div className="contact-cta">
            <span className="contact-cta-label">START YOUR PROJECT</span>
            <h3>Every great space begins with a conversation.</h3>
            <p>
              Reach out to us and let's discuss your requirements,
              ideas and the next steps for your project.
            </p>

            <a
              href="https://wa.me/919381860121?text=Hello%20Arqeva%20Spaces,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="contact-main-button"
            >
              Discuss Your Project
              <ArrowUpRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;

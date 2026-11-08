import { ArrowUpRight, Phone } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <p className="hero-label">
            INTERIOR & EXTERIOR EXECUTION · HYDERABAD
          </p>

          <h1>
            Spaces That
            <span> Inspire.</span>
            <br />
            Lives That
            <span> Matter.</span>
          </h1>

          <p className="hero-description">
            Transforming architectural visions into reality through exceptional
            interior and exterior execution. We bring precision, quality and
            craftsmanship to every space.
          </p>

          {/* Mobile Hero Image */}
          <div className="hero-image hero-image-mobile">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop&q=85"
              alt="Luxury modern architectural interior"
            />

            <div className="image-caption">
              <span>ARQEVA SPACES</span>
              <p>Crafting spaces with purpose.</p>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#contact" className="hero-primary-btn">
              Discuss Your Project
              <ArrowUpRight size={18} />
            </a>

            <a href="tel:+919381860121" className="hero-secondary-btn">
              <Phone size={17} />
              Call Us
            </a>
          </div>

          <div className="hero-highlights">
            <div>
              <h3>01</h3>
              <p>
                Quality
                <br />
                Workmanship
              </p>
            </div>

            <div>
              <h3>02</h3>
              <p>
                Transparent
                <br />
                Process
              </p>
            </div>

            <div>
              <h3>03</h3>
              <p>
                Timely
                <br />
                Execution
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop&q=85"
            alt="Luxury modern architectural interior"
          />

          <div className="image-caption">
            <span>ARQEVA SPACES</span>
            <p>Crafting spaces with purpose.</p>
          </div>
        </div>
      </div>

      <div className="hero-bottom-line">
        <span>RESIDENTIAL</span>
        <span>COMMERCIAL</span>
        <span>HYDERABAD, INDIA</span>
      </div>
    </section>
  );
}

export default Hero;


import { ArrowUpRight, Building2, House } from "lucide-react";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* Image Section */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&auto=format&fit=crop&q=85"
            alt="Modern luxury interior design"
          />

          <div className="about-image-label">
            <span>ARQEVA SPACES</span>
            <p>Thoughtfully executed spaces.</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="about-content">

          <p className="about-label">
            WHO WE ARE
          </p>

          <h2>
            Bringing Vision
            <br />
            Into <span>Reality.</span>
          </h2>

          <p className="about-description">
            Arqeva Spaces is an interior and exterior
            construction execution company based in
            Hyderabad, Telangana.
          </p>

          <p className="about-description">
            We specialize in residential and commercial
            projects, delivering professional execution
            services from planning and coordination
            through execution and final finishing.
          </p>

          <div className="about-capabilities">

            <div className="capability-item">
              <House size={25} strokeWidth={1.3} />
              <div>
                <h3>Residential Spaces</h3>
                <p>Interiors and exteriors for homes.</p>
              </div>
            </div>

            <div className="capability-item">
              <Building2 size={25} strokeWidth={1.3} />
              <div>
                <h3>Commercial Spaces</h3>
                <p>Execution solutions for businesses.</p>
              </div>
            </div>

          </div>

          <a href="#services" className="about-button">
            Explore Our Services
            <ArrowUpRight size={18} />
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;

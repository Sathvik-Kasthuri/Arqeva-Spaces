
import {
  ArrowUpRight,
  Layers3,
  Paintbrush,
  PanelsTopLeft,
  Grid2X2,
  Droplets,
  Hammer,
  Lightbulb,
  Building2,
  ShieldCheck,
  BrickWall,
  Wrench,
} from "lucide-react";

import "./Services.css";

const interiorServices = [
  { name: "Turnkey Interior Execution", icon: Layers3 },
  { name: "Civil & Finishing Works", icon: Hammer },
  { name: "False Ceiling & Partitions", icon: PanelsTopLeft },
  { name: "Flooring & Wall Finishes", icon: Grid2X2 },
  { name: "Painting & Polishing", icon: Paintbrush },
  { name: "Carpentry & Modular Works", icon: Wrench },
  { name: "Electrical & Plumbing", icon: Lightbulb },
  { name: "Glass & Aluminium Works", icon: Building2 },
];

const exteriorServices = [
  { name: "Façade Execution", icon: Building2 },
  { name: "Exterior Painting", icon: Paintbrush },
  { name: "Cladding", icon: BrickWall },
  { name: "Waterproofing", icon: Droplets },
  { name: "Paving", icon: Grid2X2 },
  { name: "Renovation & Repair Works", icon: Wrench },
];

function Services() {
  return (
    <section className="services-section" id="services">

      <div className="services-container">

        {/* Section Heading */}
        <div className="services-heading">
          <p className="services-label">WHAT WE DO</p>

          <h2>
            Our Expertise.
            <span> Your Vision.</span>
          </h2>

          <p className="services-intro">
            Complete interior and exterior execution solutions
            for residential and commercial spaces, delivered
            with attention to detail and quality workmanship.
          </p>
        </div>

        {/* Service Categories */}
        <div className="service-categories">

          {/* Interior */}
          <article className="service-card">

            <div className="service-card-image interior-image">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&auto=format&fit=crop&q=85"
                alt="Modern residential interior"
                loading="lazy"
              />

              <span className="service-number">01</span>
            </div>

            <div className="service-card-content">

              <p className="service-category-label">
                INTERIOR SOLUTIONS
              </p>

              <h3>Interior Execution</h3>

              <p className="service-card-description">
                Thoughtfully executed interior spaces,
                combining functionality, finishing and
                attention to detail.
              </p>

              <div className="service-list">
                {interiorServices.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <div className="service-list-item" key={index}>
                      <Icon size={19} strokeWidth={1.5} />
                      <span>{service.name}</span>
                    </div>
                  );
                })}
              </div>

            </div>
          </article>

          {/* Exterior */}
          <article className="service-card">

            <div className="service-card-image exterior-image">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop&q=85"
                alt="Modern residential exterior architecture"
                loading="lazy"
              />

              <span className="service-number">02</span>
            </div>

            <div className="service-card-content">

              <p className="service-category-label">
                EXTERIOR SOLUTIONS
              </p>

              <h3>Exterior Execution</h3>

              <p className="service-card-description">
                Professional exterior execution focused
                on durability, aesthetics and
                quality finishing.
              </p>

              <div className="service-list">
                {exteriorServices.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <div className="service-list-item" key={index}>
                      <Icon size={19} strokeWidth={1.5} />
                      <span>{service.name}</span>
                    </div>
                  );
                })}
              </div>

            </div>
          </article>

        </div>

        {/* Bottom CTA */}
        <div className="services-bottom">
          <p>
            Planning a new space or transforming an existing one?
          </p>

          <a href="#contact" className="services-cta">
            Discuss Your Project
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>

    </section>
  );
}

export default Services;


import {
  ShieldCheck,
  Award,
  Eye,
  Users,
  MessageCircle,
  Clock,
  Building2,
  Layers
} from "lucide-react";

import "./WhyChooseUs.css";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Professional Execution",
    description: "A structured approach to every stage of project execution."
  },
  {
    icon: Award,
    title: "Quality-Focused Workmanship",
    description: "Careful attention to materials, finishing and workmanship."
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description: "Thoughtful detailing that brings the overall space together."
  },
  {
    icon: Users,
    title: "Reliable Project Coordination",
    description: "Coordinated teams and clear planning throughout execution."
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description: "Clear updates and communication at every project stage."
  },
  {
    icon: Clock,
    title: "Timely Execution",
    description: "Focused scheduling and coordination to keep work on track."
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    description: "Execution solutions for both residential and commercial spaces."
  },
  {
    icon: Layers,
    title: "Complete Interior & Exterior Solutions",
    description: "A single team for a wide range of interior and exterior works."
  }
];

function WhyChooseUs() {
  return (
    <section className="why-section" id="why-us">
      <div className="why-container">

        <div className="why-heading">
          <span className="section-label">WHY ARQEVA SPACES</span>

          <h2>
            Built on Trust.
            <br />
            Driven by Quality.
          </h2>

          <p>
            We believe great spaces come from thoughtful planning,
            skilled execution and a commitment to quality at every step.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div className="why-card" key={index}>
                <div className="why-icon">
                  <Icon size={25} strokeWidth={1.5} />
                </div>

                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;


import {
  MessageCircle,
  MapPin,
  ClipboardList,
  Package,
  HardHat,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

import "./Process.css";

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We understand your requirements, preferences, project goals and expectations.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Site Visit",
    description:
      "We visit the site to understand the space, assess conditions and identify requirements.",
    icon: MapPin,
  },
  {
    number: "03",
    title: "Scope & Estimation",
    description:
      "We define the project scope, discuss specifications and prepare a detailed estimate.",
    icon: ClipboardList,
  },
  {
    number: "04",
    title: "Planning & Procurement",
    description:
      "We coordinate materials, resources and schedules to prepare for execution.",
    icon: Package,
  },
  {
    number: "05",
    title: "Execution & Quality Control",
    description:
      "We carry out the work with attention to detail and ongoing quality checks.",
    icon: HardHat,
  },
  {
    number: "06",
    title: "Final Handover",
    description:
      "We complete final checks and hand over the finished space to the client.",
    icon: CheckCircle2,
  },
];

function Process() {
  return (
    <section className="process-section" id="process">

      <div className="process-container">

        {/* Section Heading */}
        <div className="process-heading">
          <p className="process-label">HOW WE WORK</p>

          <h2>
            From Vision
            <span> To Reality.</span>
          </h2>

          <p className="process-intro">
            A structured approach to every project,
            ensuring clear coordination, careful execution
            and quality at every stage.
          </p>
        </div>

        {/* Process Steps */}
        <div className="process-grid">

          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <article className="process-card" key={step.number}>

                <div className="process-card-top">
                  <span className="process-number">
                    {step.number}
                  </span>

                  <div className="process-icon">
                    <Icon size={25} strokeWidth={1.5} />
                  </div>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

                <div className="process-card-line"></div>

              </article>
            );
          })}

        </div>

        {/* Bottom Message */}
        <div className="process-bottom">
          <p>Every detail matters. Every stage counts.</p>

          <a href="#contact">
            Start a Conversation
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>

    </section>
  );
}

export default Process;

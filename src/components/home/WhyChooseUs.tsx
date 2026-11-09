
"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiUsers,
  FiZap,
  FiHeadphones,
} from "react-icons/fi";

import "../../styles/components/why-choose-us.css";

const reasons = [
  {
    number: "01",
    icon: <FiCode />,
    title: "Custom-Coded Solutions",
    description:
      "We build websites and web applications tailored to your business needs, without relying on unnecessary templates.",
  },
  {
    number: "02",
    icon: <FiZap />,
    title: "Modern Technology",
    description:
      "We use modern tools and technologies to create fast, responsive, and user-friendly digital experiences.",
  },
  {
    number: "03",
    icon: <FiUsers />,
    title: "Client-Focused Approach",
    description:
      "Your ideas matter. We understand your goals and work to turn your vision into a professional digital product.",
  },
  {
    number: "04",
    icon: <FiHeadphones />,
    title: "Support & Communication",
    description:
      "We keep communication clear throughout the project and help you with support when you need it.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section" id="why-us">
      <div className="why-container">
        <motion.div
          className="why-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="why-tag">WHY TA DEVELOPS</span>

          <h2>
            Why Work With <span>Us?</span>
          </h2>

          <p>
            We combine creativity, technology, and dedication to help
            businesses build a stronger digital presence.
          </p>
        </motion.div>

        <div className="why-grid">
          {reasons.map((reason, index) => (
            <motion.div
              className="why-card"
              key={reason.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className="why-card-top">
                <div className="why-icon">{reason.icon}</div>
                <span className="why-number">{reason.number}</span>
              </div>

              <h3>{reason.title}</h3>
              <p>{reason.description}</p>

              <div className="why-card-line"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

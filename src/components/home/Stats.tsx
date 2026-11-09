
"use client";

import { motion } from "framer-motion";
import "../../styles/components/stats.css";

const stats = [
  {
    number: "06+",
    label: "Projects Showcased",
    description: "Ideas transformed into digital experiences.",
  },
  {
    number: "09",
    label: "Digital Services",
    description: "Solutions for your growing business.",
  },
  {
    number: "100%",
    label: "Commitment",
    description: "Dedicated to quality and creativity.",
  },
  {
    number: "04+",
    label: "Project Categories",
    description: "Different industries and digital solutions.",
  },
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">

        <motion.div
          className="stats-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>OUR ACHIEVEMENTS</span>
          <h2>
            Small Numbers. <span>Big Ambitions.</span>
          </h2>
          <p>
            We believe every great digital journey starts with a great idea
            and the dedication to bring it to life.
          </p>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              className="stat-card"
              key={stat.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <h3>{stat.number}</h3>
              <h4>{stat.label}</h4>
              <p>{stat.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

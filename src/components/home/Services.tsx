




"use client";

import "../../styles/components/services.css";


import { motion } from "framer-motion";
import {
  FiCode,
  FiMonitor,
  FiServer,
  FiShoppingBag,
  FiPenTool,
  FiSettings,
  FiShare2,
  FiImage,
  FiTarget,
} from "react-icons/fi";

const services = [
  {
    icon: FiCode,
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive and high-performance websites built to grow your business online.",
  },
  {
    icon: FiMonitor,
    number: "02",
    title: "Frontend Development",
    description:
      "Beautiful, interactive and user-friendly interfaces that deliver an excellent experience.",
  },
  {
    icon: FiServer,
    number: "03",
    title: "Backend Development",
    description:
      "Powerful server-side solutions, databases and functionality to keep your website running.",
  },
  {
    icon: FiShoppingBag,
    number: "04",
    title: "E-commerce Development",
    description:
      "Professional online stores with product pages, shopping carts and smooth checkout experiences.",
  },
  {
    icon: FiPenTool,
    number: "05",
    title: "UI/UX Design",
    description:
      "Creative and user-focused designs that make digital products attractive and easy to use.",
  },
  {
    icon: FiSettings,
    number: "06",
    title: "Website Maintenance",
    description:
      "Website updates, bug fixes, performance improvements and ongoing technical support.",
  },
  {
    icon: FiShare2,
    number: "07",
    title: "Social Media Management",
    description:
      "Managing business Instagram and Facebook pages, content, posts and audience engagement.",
  },
  {
    icon: FiImage,
    number: "08",
    title: "Social Media Post & Ad Design",
    description:
      "Eye-catching promotional posts, banners and creative advertisements for your brand.",
  },
  {
    icon: FiTarget,
    number: "09",
    title: "Meta Ads Management",
    description:
      "Facebook and Instagram advertising campaigns designed to reach potential customers and generate leads.",
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <motion.div
          className="services-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="services-tag">WHAT WE OFFER</span>

          <h2>
            Our Professional <span>Services</span>
          </h2>

          <p>
            From building powerful websites to growing your brand on social
            media, we provide digital solutions that help businesses move
            forward.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                className="service-card"
                key={service.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="service-card-top">
                  <div className="service-icon">
                    <Icon />
                  </div>
                  <span className="service-number">{service.number}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-card-line"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiCode,
  FiMonitor,
  FiServer,
  FiShoppingCart,
  FiPenTool,
  FiSettings,
  FiUsers,
  FiImage,
  FiTarget,
  FiArrowUpRight,
  FiCheckCircle,
  FiSearch,
  FiLayers,
  FiZap,
} from "react-icons/fi";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "../../styles/pages/services.css";

const services = [
  {
    number: "01",
    icon: <FiCode />,
    title: "Web Development",
    description:
      "We create modern, responsive, and professional websites tailored to your business goals. From business websites to custom web solutions, we focus on performance, usability, and design.",
    features: [
      "Custom website development",
      "Responsive layouts",
      "Modern user experience",
      "Performance optimization",
    ],
  },
  {
    number: "02",
    icon: <FiMonitor />,
    title: "Frontend Development",
    description:
      "We transform designs and ideas into interactive user interfaces. Our focus is on clean layouts, smooth interactions, and experiences that work beautifully across devices.",
    features: [
      "Interactive user interfaces",
      "Responsive design",
      "Figma to frontend",
      "Animations and interactions",
    ],
  },
  {
    number: "03",
    icon: <FiServer />,
    title: "Backend Development",
    description:
      "We build the functionality behind your digital products, including server-side logic, database integration, authentication, and APIs.",
    features: [
      "Database integration",
      "API development",
      "Authentication systems",
      "Backend functionality",
    ],
  },
  {
    number: "04",
    icon: <FiShoppingCart />,
    title: "E-commerce Development",
    description:
      "We develop online stores that make it easier for businesses to showcase products, manage shopping experiences, and connect with customers.",
    features: [
      "Product catalogues",
      "Shopping cart systems",
      "Checkout experiences",
      "E-commerce customization",
    ],
  },
  {
    number: "05",
    icon: <FiPenTool />,
    title: "UI/UX Design",
    description:
      "We design clean, modern, and user-friendly interfaces that communicate your brand and make digital experiences easier to navigate.",
    features: [
      "Website layouts",
      "User interface design",
      "User experience planning",
      "Figma design concepts",
    ],
  },
  {
    number: "06",
    icon: <FiSettings />,
    title: "Website Maintenance",
    description:
      "We help keep websites updated, functional, and running smoothly with ongoing improvements and technical support.",
    features: [
      "Website updates",
      "Bug fixing",
      "Content changes",
      "Performance checks",
    ],
  },
  {
    number: "07",
    icon: <FiUsers />,
    title: "Social Media Management",
    description:
      "We help businesses maintain an active social media presence through consistent content, page management, and audience engagement.",
    features: [
      "Instagram page management",
      "Facebook page management",
      "Content scheduling",
      "Audience engagement",
    ],
  },
  {
    number: "08",
    icon: <FiImage />,
    title: "Social Media Post & Ad Design",
    description:
      "We create attractive promotional graphics and social media creatives that help businesses communicate offers, products, and brand messages.",
    features: [
      "Social media post designs",
      "Promotional graphics",
      "Ad creatives",
      "Brand-focused visuals",
    ],
  },
  {
    number: "09",
    icon: <FiTarget />,
    title: "Meta Ads Management",
    description:
      "We help businesses plan and manage advertising campaigns on Facebook and Instagram to reach relevant audiences and promote their products or services.",
    features: [
      "Campaign setup",
      "Audience targeting",
      "Ad campaign monitoring",
      "Performance optimization",
    ],
  },
];

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Supabase",
  "Figma",
  "WordPress",
];

const process = [
  {
    number: "01",
    icon: <FiSearch />,
    title: "Discovery",
    description:
      "We understand your business, requirements, audience, and goals.",
  },
  {
    number: "02",
    icon: <FiLayers />,
    title: "Planning",
    description:
      "We organize the project structure, features, and design direction.",
  },
  {
    number: "03",
    icon: <FiCode />,
    title: "Development",
    description:
      "We build your solution with attention to quality and responsiveness.",
  },
  {
    number: "04",
    icon: <FiZap />,
    title: "Delivery",
    description:
      "We test the project and prepare it for a smooth launch.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="services-page">

        {/* HERO */}
        <section className="services-page-hero">
          <motion.div
            className="services-page-hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="services-page-tag">
              WHAT WE DO
            </span>

            <h1>
              Digital Services.
              <span> Real Possibilities.</span>
            </h1>

            <p>
              From custom website development to digital marketing,
              we provide creative and technology-driven solutions
              to help businesses build their digital presence.
            </p>

            <Link href="/quote" className="services-page-button">
              Discuss Your Project <FiArrowUpRight />
            </Link>
          </motion.div>

          <div className="services-hero-bottom">
            <span>DESIGN</span>
            <span>DEVELOPMENT</span>
            <span>DIGITAL GROWTH</span>
          </div>
        </section>

        {/* ALL SERVICES */}
        <section className="all-services-section">
          <div className="services-section-heading">
            <span className="services-page-tag">
              OUR EXPERTISE
            </span>

            <h2>
              Solutions for Your
              <span> Digital Journey.</span>
            </h2>

            <p>
              Explore our services and discover how we can help
              bring your next idea to life.
            </p>
          </div>

          <div className="all-services-grid">
            {services.map((service, index) => (
              <motion.article
                className="service-detail-card"
                key={service.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: (index % 3) * 0.1,
                }}
              >
                <div className="service-detail-top">
                  <div className="service-detail-icon">
                    {service.icon}
                  </div>

                  <span>{service.number}</span>
                </div>

                <h3>{service.title}</h3>

                <p className="service-detail-description">
                  {service.description}
                </p>

                <div className="service-detail-divider"></div>

                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <FiCheckCircle />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/quote?service=${encodeURIComponent(service.title)}`}
                  className="service-detail-link"
                >
                  Discuss This Service <FiArrowUpRight />
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="services-tech-section">
          <div className="services-section-heading">
            <span className="services-page-tag">
              OUR TECHNOLOGY STACK
            </span>

            <h2>
              Tools Behind Our
              <span> Digital Solutions.</span>
            </h2>

            <p>
              We work with modern technologies and platforms
              to build flexible digital experiences.
            </p>
          </div>

          <div className="services-tech-grid">
            {technologies.map((technology, index) => (
              <motion.div
                className="services-tech-item"
                key={technology}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <span>0{index + 1}</span>
                <strong>{technology}</strong>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="services-process-section">
          <div className="services-section-heading">
            <span className="services-page-tag">
              OUR WORKFLOW
            </span>

            <h2>
              How We Bring Ideas
              <span> to Life.</span>
            </h2>

            <p>
              Every successful project starts with a clear process.
            </p>
          </div>

          <div className="services-process-grid">
            {process.map((step, index) => (
              <motion.div
                className="services-process-card"
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <div className="services-process-top">
                  <div>{step.icon}</div>
                  <span>{step.number}</span>
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="services-page-cta">
          <div>
            <span className="services-page-tag">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let's Build Your
              <span> Next Big Thing.</span>
            </h2>

            <p>
              Tell us about your idea. We'll work with you to
              explore the right digital solution.
            </p>

            <Link href="/quote" className="services-page-button">
              Start Your Project <FiArrowUpRight />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

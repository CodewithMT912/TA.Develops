
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiTarget,
  FiEye,
  FiCode,
  FiZap,
  FiUsers,
  FiTrendingUp,
  FiArrowUpRight,
  FiSearch,
  FiLayers,
  FiMonitor,
  FiCheckCircle,
} from "react-icons/fi";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "../../styles/pages/about.css";

const values = [
  {
    icon: <FiCode />,
    title: "Quality Development",
    description:
      "We focus on clean code, thoughtful design, and reliable digital solutions.",
  },
  {
    icon: <FiZap />,
    title: "Innovation",
    description:
      "We explore modern technologies and creative approaches to solve problems.",
  },
  {
    icon: <FiUsers />,
    title: "Client First",
    description:
      "We listen to your ideas and keep your business goals at the center of every project.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Continuous Growth",
    description:
      "We keep learning, improving, and building better digital experiences.",
  },
];

const process = [
  {
    number: "01",
    icon: <FiSearch />,
    title: "Understand",
    description:
      "We learn about your business, goals, audience, and project requirements.",
  },
  {
    number: "02",
    icon: <FiLayers />,
    title: "Plan & Design",
    description:
      "We organize the project and shape the design around your vision.",
  },
  {
    number: "03",
    icon: <FiMonitor />,
    title: "Develop",
    description:
      "We turn the approved idea into a responsive and functional digital product.",
  },
  {
    number: "04",
    icon: <FiCheckCircle />,
    title: "Launch",
    description:
      "We test the final experience and prepare your project for launch.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="about-page">
        {/* HERO */}
        <section className="about-hero">
          <div className="about-hero-glow"></div>

          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="about-tag">GET TO KNOW US</span>

            <h1>
              We Are <span>TA Develops.</span>
              <br />
              We Build Digital Possibilities.
            </h1>

            <p>
              We are a digital development agency focused on turning
              ideas into modern websites, web applications, and
              meaningful digital experiences.
            </p>

            <div className="about-hero-buttons">
              <Link href="/services" className="about-primary-btn">
                Explore Our Services <FiArrowUpRight />
              </Link>

              <Link href="/contact" className="about-outline-btn">
                Get In Touch
              </Link>
            </div>
          </motion.div>

          <div className="about-hero-bottom">
            <span>CREATIVITY</span>
            <span className="about-bottom-dot"></span>
            <span>TECHNOLOGY</span>
            <span className="about-bottom-dot"></span>
            <span>INNOVATION</span>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="about-story">
          <motion.div
            className="about-story-visual"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-visual-card">
              <div className="about-visual-top">
                <span className="about-live-dot"></span>
                DIGITAL INNOVATION
              </div>

              <div className="about-visual-symbol">
                <span>&lt;</span>
                <span>/</span>
                <span>&gt;</span>
              </div>

              <div className="about-visual-caption">
                <span>IDEAS INTO REALITY</span>
                <strong>YOUR VISION. OUR CODE.</strong>
              </div>

              <div className="about-visual-orbit orbit-one"></div>
              <div className="about-visual-orbit orbit-two"></div>
            </div>
          </motion.div>

          <motion.div
            className="about-story-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="about-tag">WHO WE ARE</span>

            <h2>
              More Than Just
              <span> A Development Agency.</span>
            </h2>

            <p>
              TA Develops is a Lahore-based web application company
              focused on helping businesses establish and grow their
              digital presence.
            </p>

            <p>
              From custom-coded websites and e-commerce platforms
              to web applications and digital marketing solutions,
              we bring creativity and technology together to help
              turn ideas into reality.
            </p>

            <p>
              Our approach is simple: understand the vision, create
              the right solution, and deliver an experience that
              makes a difference.
            </p>

            <Link href="/projects" className="about-text-link">
              Explore Our Work <FiArrowUpRight />
            </Link>
          </motion.div>
        </section>

        {/* MISSION AND VISION */}
        <section className="about-purpose">
          <div className="about-section-heading">
            <span className="about-tag">OUR PURPOSE</span>
            <h2>
              What Drives <span>Us Forward?</span>
            </h2>
            <p>
              Everything we build starts with a purpose and a vision.
            </p>
          </div>

          <div className="about-purpose-grid">
            <motion.div
              className="about-purpose-card"
              whileHover={{ y: -8 }}
            >
              <div className="about-purpose-icon">
                <FiTarget />
              </div>
              <span className="about-card-label">OUR MISSION</span>
              <h3>Making Ideas Work Digitally.</h3>
              <p>
                To create accessible, modern, and effective digital
                solutions that help businesses present themselves
                professionally and reach their goals.
              </p>
            </motion.div>

            <motion.div
              className="about-purpose-card vision-card"
              whileHover={{ y: -8 }}
            >
              <div className="about-purpose-icon">
                <FiEye />
              </div>
              <span className="about-card-label">OUR VISION</span>
              <h3>Building a Digital Future.</h3>
              <p>
                To grow into a trusted technology company known for
                creativity, quality development, and meaningful
                digital experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* VALUES */}
        <section className="about-values">
          <div className="about-section-heading">
            <span className="about-tag">WHAT WE BELIEVE IN</span>
            <h2>
              Our Core <span>Values.</span>
            </h2>
            <p>
              The principles that guide our work and shape every
              project we take on.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value, index) => (
              <motion.div
                className="about-value-card"
                key={value.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <div className="about-value-icon">{value.icon}</div>
                <span className="about-value-number">
                  0{index + 1}
                </span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WORKING PROCESS */}
        <section className="about-process">
          <div className="about-section-heading">
            <span className="about-tag">HOW WE WORK</span>
            <h2>
              From Idea to <span>Launch.</span>
            </h2>
            <p>
              A clear and collaborative process to bring your project
              to life.
            </p>
          </div>

          <div className="about-process-grid">
            {process.map((item, index) => (
              <motion.div
                className="about-process-card"
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <div className="about-process-top">
                  <div className="about-process-icon">{item.icon}</div>
                  <span>{item.number}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="about-final-cta">
          <div className="about-final-inner">
            <span className="about-tag">LET'S CREATE SOMETHING</span>

            <h2>
              Your Next Big Idea
              <span> Starts Here.</span>
            </h2>

            <p>
              Have a project in mind? Let's discuss how we can turn
              your vision into a digital reality.
            </p>

            <Link href="/quote" className="about-primary-btn">
              Start Your Project <FiArrowUpRight />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

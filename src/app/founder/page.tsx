
"use client";

import Image from "next/image";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import "../../styles/pages/founder.css";

export default function FounderPage() {
  return (
    <>
      <Navbar />

      <main className="founder-page">

        {/* HERO SECTION */}
        <section className="founder-hero">
          <motion.div
            className="founder-hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="founder-label">THE PEOPLE BEHIND TA.DEVELOPS</span>

            <h1>
              Meet The <span>Minds</span><br />
              Behind Our Vision.
            </h1>

            <p>
              Every great company begins with an idea, a vision, and the
              determination to make it real. Meet the people building
              TA Develops.
            </p>

            <Link href="/contact" className="founder-button">
              Connect With Us <span>↗</span>
            </Link>
          </motion.div>
        </section>

        {/* FOUNDERS SECTION */}
        <section className="founders-section">
          <div className="founder-section-heading">
            <span>OUR LEADERSHIP</span>
            <h2>The People Behind <span>Our Work</span></h2>
            <p>
              Driven by creativity, technology, and a shared vision
              to build meaningful digital experiences.
            </p>
          </div>

          <div className="founders-grid">

            <motion.article
              className="founder-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
            <div className="founder-image-placeholder">
  <Image
    src="/images/founder.png"
    alt="Founder of TA Develops"
    width={500}
    height={600}
    className="founder-portrait"
  />
</div>

              <div className="founder-card-info">
                <span className="founder-role">FOUNDER & CEO</span>
                <h3>Muhammad Talha Tanveer</h3>
                <p>
                  The vision behind TA Develops, focused on creating
                  modern digital solutions and turning ideas into
                  meaningful online experiences.
                </p>
              </div>
            </motion.article>

            <motion.article
              className="founder-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="founder-image-placeholder">
                <span>CO-FOUNDER PORTRAIT</span>
                <small>Sketch coming soon</small>
              </div>

              <div className="founder-card-info">
                <span className="founder-role">CO-FOUNDER</span>
                <h3>Coming Soon</h3>
                <p>
                  A valued part of the team, helping bring the
                  TA Develops vision to life.
                </p>
              </div>
            </motion.article>

          </div>
        </section>

        {/* OUR STORY */}
        <section className="founder-story">
          <div className="founder-story-content">
            <span className="founder-label">HOW IT STARTED</span>
            <h2>Built From A Vision. <span>Driven By Passion.</span></h2>
            <p>
              TA Develops was created with a simple goal: to help
              businesses and individuals build a stronger digital
              presence through modern websites and creative technology.
            </p>
            <p>
              We believe every idea deserves the opportunity to grow.
              Our focus is on learning, creating, improving, and
              delivering digital experiences that make a difference.
            </p>
          </div>
        </section>

        {/* VISION */}
        <section className="founder-vision">
          <span className="founder-label">LOOKING AHEAD</span>
          <h2>Our Vision Is <span>Bigger Than Websites.</span></h2>
          <p>
            We aim to build a technology company that helps businesses
            grow through development, design, digital solutions, and
            innovative ideas.
          </p>
        </section>

        {/* CTA */}
        <section className="founder-cta">
          <h2>Have An Idea? <span>Let's Build It.</span></h2>
          <p>Let's turn your vision into something real.</p>
          <Link href="/quote" className="founder-button">
            Start Your Project <span>↗</span>
          </Link>
        </section>

      </main>

      <Footer />
    </>
  );
}

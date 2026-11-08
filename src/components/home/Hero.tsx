
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import "../../styles/components/hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">

        {/* Left content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-tag">
            <span className="hero-tag-dot"></span>
            DIGITAL SOLUTIONS THAT DRIVE GROWTH
          </div>

          <h1>
            We Build Digital
            <br />
            Experiences That
            <br />
            <span>Move Businesses</span>
            <br />
            Forward.
          </h1>

          <p className="hero-description">
            We transform ideas into powerful websites and digital
            solutions. From modern web development to creative digital
            experiences, we help your business stand out.
          </p>

          <div className="hero-buttons">
            <Link href="/quote" className="hero-primary-btn">
              Start a Project
              <i className="bi bi-arrow-up-right"></i>
            </Link>

            <Link href="/projects" className="hero-secondary-btn">
              Explore Our Work
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="hero-trust">
            <span className="hero-trust-line"></span>
            <p>YOUR IDEA. OUR CODE. YOUR SUCCESS.</p>
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="hero-glow"></div>

          <div className="hero-circle hero-circle-one"></div>
          <div className="hero-circle hero-circle-two"></div>

          <div className="hero-code-card">
            <div className="code-card-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>ta-develops.tsx</p>
              <i className="bi bi-code-slash"></i>
            </div>

            <div className="code-card-body">
              <p><span className="code-number">01</span> <span className="code-purple">const</span> <span className="code-green">solution</span> = {"{"}</p>
              <p><span className="code-number">02</span> &nbsp; creativity: <span className="code-yellow">"Unlimited"</span>,</p>
              <p><span className="code-number">03</span> &nbsp; quality: <span className="code-yellow">"Premium"</span>,</p>
              <p><span className="code-number">04</span> &nbsp; technology: <span className="code-yellow">"Modern"</span>,</p>
              <p><span className="code-number">05</span> &nbsp; results: <span className="code-green">"Powerful"</span></p>
              <p><span className="code-number">06</span> {"}"};</p>
              <br />
              <p><span className="code-number">07</span> <span className="code-purple">return</span> <span className="code-green">success</span>;</p>
            </div>

            <div className="code-card-footer">
              <span className="footer-status"></span>
              Building something amazing...
            </div>
          </div>

          <div className="hero-floating-card floating-top">
            <i className="bi bi-lightning-charge-fill"></i>
            <div>
              <strong>Creative Ideas</strong>
              <span>Built with purpose</span>
            </div>
          </div>

          <div className="hero-floating-card floating-bottom">
            <i className="bi bi-window-stack"></i>
            <div>
              <strong>Modern Websites</strong>
              <span>Designed to perform</span>
            </div>
          </div>

          <div className="hero-orbit-dot"></div>
        </motion.div>

      </div>

      <div className="hero-bottom-glow"></div>
    </section>
  );
}

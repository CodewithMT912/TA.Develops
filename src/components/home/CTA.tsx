
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight, FiMessageCircle } from "react-icons/fi";

import "../../styles/components/cta.css";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-glow cta-glow-one"></div>
      <div className="cta-glow cta-glow-two"></div>

      <motion.div
        className="cta-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="cta-tag">HAVE A PROJECT IN MIND?</span>

        <h2>
          Let's Build Something
          <span> Amazing Together.</span>
        </h2>

        <p>
          Have an idea, a business, or a vision? Let's turn it into a
          powerful digital experience. Your next big project starts
          with one conversation.
        </p>

        <div className="cta-buttons">
          <Link href="/quote" className="cta-primary">
            Start Your Project
            <FiArrowUpRight />
          </Link>

          <Link href="/contact" className="cta-secondary">
            <FiMessageCircle />
            Contact Us
          </Link>
        </div>

        <div className="cta-bottom-text">
          YOUR IDEA. OUR CODE. YOUR SUCCESS.
        </div>
      </motion.div>
    </section>
  );
}

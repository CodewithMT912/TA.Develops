
"use client";

import { useState, type FormEvent } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiMail,
  FiMessageCircle,
  FiMapPin,
  FiArrowUpRight,
  FiSend,
} from "react-icons/fi";
import "../../styles/pages/contact.css";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setFormMessage("");
    setIsSuccess(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const inquiry = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inquiry),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setIsSuccess(true);
      setFormMessage("Your message has been sent successfully!");
      form.reset();
    } catch (error) {
      setIsSuccess(false);
      setFormMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      <main className="contact-page">

        {/* HERO */}
        <section className="contact-hero">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="contact-label">LET'S CONNECT</span>

            <h1>
              Let's Start A <span>Conversation.</span>
            </h1>

            <p>
              Have a project in mind or need help growing your business
              online? We'd love to hear about your ideas.
            </p>

            <a href="#contact-details" className="contact-hero-btn">
              Get In Touch <FiArrowUpRight />
            </a>
          </motion.div>
        </section>

        {/* CONTACT CONTENT */}
        <section className="contact-main" id="contact-details">

          <div className="contact-heading">
            <span className="contact-label">CONTACT TA.DEVELOPS</span>
            <h2>We're Here To <span>Help You.</span></h2>
            <p>
              Tell us what you're planning. Let's find the right
              digital solution for your needs.
            </p>
          </div>

          <div className="contact-layout">

            {/* CONTACT INFORMATION */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3>Let's Talk About Your Project</h3>

              <p>
                Whether you need a website, web application, design,
                or social media services, our team is ready to help.
              </p>

              <div className="contact-info-list">

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <FiMail />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <span>tadevelops8@gmail.com</span>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <FiMessageCircle />
                  </div>
                  <div>
                    <h4>WhatsApp</h4>
                    <span>+92 3704060104</span>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <FiMapPin />
                  </div>
                  <div>
                    <h4>Location</h4>
                    <span>Lahore, Pakistan</span>
                  </div>
                </div>

              </div>

              <div className="contact-info-bottom">
                <span>HAVE AN IDEA?</span>
                <h4>Let's Make It Happen.</h4>
              </div>
            </motion.div>

            {/* CONTACT FORM */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3>Send Us A Message</h3>
              <p>Fill in the details and tell us about your project.</p>

              <form className="contact-form" onSubmit={handleSubmit}>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-service">What Do You Need?</label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service</option>
                    <option>Website Development</option>
                    <option>Web Application</option>
                    <option>E-commerce Website</option>
                    <option>UI/UX Design</option>
                    <option>Social Media Management</option>
                    <option>Social Media Posts & Ads</option>
                    <option>Meta Ads Management</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">Your Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <FiSend />}
                </button>

                {formMessage && (
                  <p
                    role="status"
                    aria-live="polite"
                    style={{
                      color: isSuccess ? "#B7F21B" : "#ff6b6b",
                      marginTop: "15px",
                    }}
                  >
                    {formMessage}
                  </p>
                )}

                <small className="contact-form-note">
                  Your information is securely submitted to TA Develops.
                </small>

              </form>
            </motion.div>

          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="contact-bottom">
          <span className="contact-label">YOUR NEXT STEP STARTS HERE</span>
          <h2>Ready To Build Something <span>Great?</span></h2>
          <p>
            Your idea deserves more than just a website.
            Let's create something meaningful together.
          </p>

          <Link href="/quote" className="contact-hero-btn">
            Request A Quote <FiArrowUpRight />
          </Link>
        </section>

      </main>

      <Footer />
    </>
  );
}

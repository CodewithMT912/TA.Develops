
"use client";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiMessageSquare,
  FiSend,
} from "react-icons/fi";
import "../../styles/pages/quote.css";

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // We'll connect this form to Supabase in the next stage.
    console.log("Quote request:", formData);
    setSubmitted(true);
  }

  return (
 <>
    <Navbar />
    <main className="quote-page">
      <section className="quote-hero">
        <motion.div
          className="quote-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="quote-eyebrow">
            <span /> LET'S WORK TOGETHER
          </span>

          <h1>
            Let's Build
            <br />
            Something <span>Great.</span>
          </h1>

          <p>
            Have an idea, a business, or a project in mind? Tell us about it.
            Let's turn your vision into something extraordinary.
          </p>

          <div className="quote-hero-points">
            <div>
              <FiCheckCircle />
              <span>Custom Solutions</span>
            </div>
            <div>
              <FiClock />
              <span>Clear Timelines</span>
            </div>
            <div>
              <FiDollarSign />
              <span>Transparent Pricing</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="quote-hero-card"
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="quote-card-icon">
            <FiMessageSquare />
          </div>
          <span>YOUR NEXT BIG IDEA</span>
          <h2>Starts with a conversation.</h2>
          <p>
            Every great project begins with understanding your goals. Share
            your requirements and our team will take it from there.
          </p>
          <div className="quote-card-line" />
          <span className="quote-card-bottom">
            TA.DEVELOPS <span>●</span> DIGITAL SOLUTIONS
          </span>
        </motion.div>
      </section>

      <section className="quote-form-section">
        <div className="quote-section-heading">
          <span className="quote-eyebrow">
            <span /> PROJECT DETAILS
          </span>
          <h2>
            Tell Us About Your <span>Project.</span>
          </h2>
          <p>
            Complete the form below so we can understand your needs and prepare
            the right solution.
          </p>
        </div>

        <div className="quote-form-layout">
          <form className="quote-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="quote-success">
                <FiCheckCircle />
                <h2>Request Submitted!</h2>
                <p>
                  Your form passed the local submission test. We'll connect it
                  to our database next.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <div className="quote-form-heading">
                  <span>01 — YOUR INFORMATION</span>
                  <h3>Let's get to know you.</h3>
                </div>

                <div className="quote-fields-grid">
                  <div className="quote-field">
                    <label htmlFor="quote-name">Full Name *</label>
                    <input
                      id="quote-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="quote-field">
                    <label htmlFor="quote-email">Email Address *</label>
                    <input
                      id="quote-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="quote-field">
                    <label htmlFor="quote-whatsapp">WhatsApp Number *</label>
                    <input
                      id="quote-whatsapp"
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="+92 3XX XXXXXXX"
                      required
                    />
                  </div>

                  <div className="quote-field">
                    <label htmlFor="quote-company">
                      Company / Business Name
                    </label>
                    <input
                      id="quote-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="quote-form-divider" />

                <div className="quote-form-heading">
                  <span>02 — PROJECT REQUIREMENTS</span>
                  <h3>What are we building?</h3>
                </div>

                <div className="quote-fields-grid">
                  <div className="quote-field">
                    <label htmlFor="quote-service">Service Required *</label>
                    <select
                      id="quote-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Frontend Development">
                        Frontend Development
                      </option>
                      <option value="Backend Development">
                        Backend Development
                      </option>
                      <option value="E-commerce Development">
                        E-commerce Development
                      </option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Website Maintenance">
                        Website Maintenance
                      </option>
                      <option value="Social Media Management">
                        Social Media Management
                      </option>
                      <option value="Social Media Post & Ad Design">
                        Social Media Post & Ad Design
                      </option>
                      <option value="Meta Ads Management">
                        Meta Ads Management
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="quote-field">
                    <label htmlFor="quote-budget">Estimated Budget *</label>
                    <select
                      id="quote-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your budget</option>
                      <option value="Under $100">Under $100</option>
                      <option value="$100 - $300">$100 - $300</option>
                      <option value="$300 - $500">$300 - $500</option>
                      <option value="$500 - $1000">$500 - $1000</option>
                      <option value="$1000+">$1000+</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>

                  <div className="quote-field quote-field-full">
                    <label htmlFor="quote-timeline">
                      Expected Project Timeline *
                    </label>
                    <select
                      id="quote-timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a timeline</option>
                      <option value="As soon as possible">
                        As soon as possible
                      </option>
                      <option value="Within 1-2 weeks">Within 1-2 weeks</option>
                      <option value="Within 1 month">Within 1 month</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>

                  <div className="quote-field quote-field-full">
                    <label htmlFor="quote-description">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      id="quote-description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Describe your idea, goals, required features, and anything else we should know..."
                      rows={6}
                      required
                    />
                  </div>
                </div>

                <button className="quote-submit-btn" type="submit">
                  Send Quote Request <FiSend />
                </button>

                <p className="quote-privacy-note">
                  By submitting this form, you agree to be contacted about your
                  project.
                </p>
              </>
            )}
          </form>

          <aside className="quote-side-info">
            <div className="quote-side-card">
              <span>WHY CHOOSE US?</span>
              <h3>More than just a development team.</h3>
              <p>
                We focus on building digital solutions that help businesses
                grow, connect, and stand out.
              </p>

              <ul>
                <li><FiCheckCircle /> Modern technologies</li>
                <li><FiCheckCircle /> Responsive development</li>
                <li><FiCheckCircle /> Clear communication</li>
                <li><FiCheckCircle /> Dedicated support</li>
              </ul>
            </div>

            <div className="quote-contact-card">
              <span>HAVE A QUESTION?</span>
              <h3>Let's talk directly.</h3>
              <p>Prefer a direct conversation? Contact our team.</p>
              <Link href="/contact">
                Contact Us <FiArrowRight />
              </Link>
            </div>
          </aside>
        </div>
      </section>

     

    </main>
     <Footer />
  </>
  );
}


import Link from "next/link";
import Image from "next/image";
import {
  FiArrowUpRight,
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiMail,
  FiGlobe,
} from "react-icons/fi";

import "../../styles/components/footer.css";

const services = [
  "Web Development",
  "Frontend Development",
  "Backend Development",
  "E-commerce Development",
  "UI/UX Design",
  "Website Maintenance",
  "Social Media Management",
  "Social Media Post & Ad Design",
  "Meta Ads Management",
];

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">

        {/* Top CTA */}
        <div className="footer-top">
          <div>
            <span className="footer-eyebrow">LET'S CONNECT</span>
            <h2>
              Have an idea?
              <span> Let's make it real.</span>
            </h2>
          </div>

          <Link href="/quote" className="footer-cta">
            Start a Project <FiArrowUpRight />
          </Link>
        </div>

        <div className="footer-divider"></div>

        {/* Main Footer */}
        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <Image
                src="/logo.png"
                alt="TA Develops Logo"
                width={175}
                height={85}
              />
            </Link>

            <h3>
              TA<span>.</span>DEVELOPS
            </h3>

            <p>
              Turning ideas into powerful digital experiences.
              We build modern websites and digital solutions
              that help businesses grow.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Instagram">
                <FiInstagram />
              </a>
              <a href="#" aria-label="Facebook">
                <FiFacebook />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="/contact" aria-label="Contact us">
                <FiMail />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Our Projects</Link></li>
              <li><Link href="/founder">Founder</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column footer-services">
            <h4>Our Services</h4>
            <ul>
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h4>Get In Touch</h4>
            <p>
              Have a project or business idea? We'd love
              to hear about it.
            </p>

            <Link href="/contact" className="footer-contact-link">
              <FiMail />
              Contact Our Team
              <FiArrowUpRight />
            </Link>

            <div className="footer-location">
              <FiGlobe />
              <span>Building Digital Experiences Worldwide</span>
            </div>
          </div>

        </div>

        <div className="footer-divider"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} TA Develops.
            All rights reserved.
          </p>

          <p className="footer-made">
            Designed & Developed with
            <span> ♥ </span>
            by TA Develops
          </p>

          <Link href="/" className="footer-back-top">
            Back to Top ↑
          </Link>
        </div>

      </div>
    </footer>
  );
}


"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiCode,
  FiExternalLink,
  FiLayers,
} from "react-icons/fi";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "../../styles/pages/projects.css";

const projects = [
  {
    number: "01",
    name: "Beyond the Beauty",
    category: "E-commerce Website",
    status: "Live",
    link: "https://beyond-the-beauty.vercel.app/",
    description:
      "A modern beauty and skincare shopping experience with product browsing and an elegant brand-focused design.",
    technologies: ["Next.js", "Supabase", "CSS"],
    type: "E-commerce",
    preview: "beauty",
  },
  {
    number: "02",
    name: "New Pakistan Sanitary Store",
    category: "E-commerce Website",
    status: "In Progress",
    link: "https://pakistansanitarystore.vercel.app/",
    description:
      "An online sanitary store designed to showcase bathroom and kitchen products with a smooth shopping experience.",
    technologies: ["Next.js", "React", "CSS"],
    type: "E-commerce",
    preview: "sanitary",
  },
  {
    number: "03",
    name: "Paradise Beauty Saloon",
    category: "Business Website",
    status: "Live",
    link: "https://paradise-saloon.vercel.app/",
    description:
      "A professional website for a local barber shop featuring services, business information and WhatsApp booking.",
    technologies: ["Next.js", "Bootstrap", "CSS"],
    type: "Business",
    preview: "saloon",
  },
  {
    number: "04",
    name: "Digital News App",
    category: "Web Application",
    status: "Coming Soon",
    link: "",
    description:
      "A digital news platform designed to present news content through a clean and organized interface.",
    technologies: ["Next.js", "Bootstrap", "MongoDB"],
    type: "Web App",
    preview: "news",
  },
  {
    number: "05",
    name: "TA Develops",
    category: "Agency Website",
    status: "Live",
    link: "https://ta-develops-seven.vercel.app/",
    description:
      "Our digital agency website, created to present services, showcase projects and connect with potential clients.",
    technologies: ["Next.js", "React", "CSS"],
    type: "Business",
    preview: "agency",
  },
  {
    number: "06",
    name: "Emerald Falcon",
    category: "Business Website",
    status: "Coming Soon",
    link: "",
    description:
      "A modern business website concept focused on a polished visual identity and professional digital presence.",
    technologies: ["Next.js", "React", "CSS"],
    type: "Business",
    preview: "emerald",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="projects-page">

        {/* HERO SECTION */}

        <section className="projects-page-hero">
          <motion.div
            className="projects-page-hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="projects-page-tag">
              <FiLayers /> OUR PORTFOLIO
            </span>

            <h1>
              Ideas Into
              <span> Digital Reality.</span>
            </h1>

            <p>
              Explore our selected projects, creative solutions and digital
              experiences. Every project represents our commitment to quality,
              functionality and modern design.
            </p>

            <Link href="/quote" className="projects-page-button">
              Start Your Project <FiArrowUpRight />
            </Link>
          </motion.div>

          <div className="projects-hero-bottom">
            <span>CREATIVE THINKING</span>
            <span>MODERN TECHNOLOGY</span>
            <span>QUALITY DEVELOPMENT</span>
          </div>
        </section>

        {/* PROJECT SHOWCASE */}

        <section className="projects-showcase-section">

          <div className="projects-section-heading">
            <span className="projects-page-tag">SELECTED WORK</span>

            <h2>
              Projects That <span>Speak.</span>
            </h2>

            <p>
              A collection of websites and applications built with creativity,
              purpose and modern technologies.
            </p>
          </div>

          <div className="projects-page-grid">

            {projects.map((project, index) => (
              <motion.a
                className={`projects-page-card ${
                  project.link
                    ? "clickable-project"
                    : "project-disabled"
                }`}
                key={project.number}
                href={project.link || undefined}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >

                {/* PROJECT PREVIEW */}

                <div
                  className={`project-page-preview ${project.preview}`}
                >
                  <div className="project-preview-top">
                    <span>TA.DEVELOPS</span>
                    <FiExternalLink />
                  </div>

                  <div className="project-preview-center">
                    <FiCode />

                    <span>{project.name}</span>

                    <small>{project.category}</small>
                  </div>

                  <span className="project-preview-number">
                    {project.number}
                  </span>
                </div>

                {/* PROJECT DETAILS */}

                <div className="project-page-info">

                  <div className="project-page-meta">
                    <span>{project.category}</span>

                    <span
                      className={`project-status ${project.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3>{project.name}</h3>

                  <p>{project.description}</p>

                  <div className="project-page-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-page-bottom">
                    <span>
                      {project.link
                        ? "VIEW LIVE WEBSITE"
                        : project.status === "In Progress"
                        ? "IN DEVELOPMENT"
                        : "COMING SOON"}
                    </span>

                    <FiArrowUpRight />
                  </div>

                </div>

              </motion.a>
            ))}

          </div>
        </section>

        {/* FINAL CTA */}

        <section className="projects-page-cta">
          <div>
            <span className="projects-page-tag">HAVE AN IDEA?</span>

            <h2>
              Let's Create Your
              <span> Next Success Story.</span>
            </h2>

            <p>
              Have a project in mind? Let's discuss your idea and turn it into
              something meaningful.
            </p>

            <Link href="/quote" className="projects-page-button">
              Discuss Your Project <FiArrowUpRight />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

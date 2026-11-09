
"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import "../../styles/components/projects.css";

const projects = [
  {
    number: "01",
    name: "Beyond the Beauty",
    category: "E-commerce Website",
    description: "A modern beauty and skincare shopping experience.",
    technologies: ["Next.js", "Supabase", "CSS"],
    preview: "beauty",
    previewText: "BEYOND THE BEAUTY",
    link: "https://beyond-the-beauty.vercel.app/",
  },
  {
    number: "02",
    name: "New Pakistan Sanitary Store",
    category: "Business / E-commerce",
    description: "A professional online sanitary products store.",
    technologies: ["Next.js", "React", "CSS"],
    preview: "sanitary",
    previewText: "NEW PAKISTAN",
    link: "https://pakistansanitarystore.vercel.app",
  },
  {
    number: "03",
    name: "Paradise Beauty Saloon",
    category: "Business Website",
    description: "A stylish business website with WhatsApp booking.",
    technologies: ["Next.js", "Bootstrap", "CSS"],
    preview: "saloon",
    previewText: "PARADISE SALOON",
    link: "https://paradise-saloon.vercel.app/",
  },

 


  {
    number: "04",
    name: "Digital News App",
    category: "Web Application",
    description:
      "A modern digital news platform designed to deliver the latest news and updates through a clean interface.",
    technologies: ["Next.js", "Bootstrap", "MongoDB"],
    preview: "news",
    previewText: "DIGITAL NEWS",
  },
  {
    number: "05",
    name: "TA Develops",
    category: "Agency Website",
    description:
      "Our own agency website showcasing professional services, creative projects and digital solutions.",
    technologies: ["Next.js", "React", "CSS"],
    preview: "agency",
    previewText: "TA.DEVELOPS",
  },
  {
    number: "06",
    name: "Emerald Falcon",
    category: "Business Website",
    description:
      "A modern business website designed with a premium visual identity and professional user experience.",
    technologies: ["Next.js", "React", "CSS"],
    preview: "emerald",
    previewText: "EMERALD FALCON",
  },
];






export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="projects-tag">OUR PORTFOLIO</span>

          <h2>
            Projects That <span>Speak</span>
          </h2>

          <p>
            Every project represents an idea transformed into a digital
            experience. Explore some of the work behind TA Develops.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className={`project-preview ${project.preview}`}>
                <div className="preview-browser">
                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span className="preview-brand">
                    {project.previewText}
                  </span>

                  <div className="preview-content">
                    <span>CREATIVE DIGITAL EXPERIENCE</span>
                    <div className="preview-line"></div>
                    <div className="preview-line short"></div>
                    <div className="preview-button"></div>
                  </div>
                </div>

                <span className="project-number">{project.number}</span>
              </div>

              <div className="project-info">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

             
{project.link ? (
  <Link
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="project-bottom"
  >
    <span>VIEW LIVE PROJECT</span>
    <FiArrowUpRight />
  </Link>
) : (
  <div className="project-bottom coming-soon">
    <span>COMING SOON</span>
    <FiArrowUpRight />
  </div>
)}


              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

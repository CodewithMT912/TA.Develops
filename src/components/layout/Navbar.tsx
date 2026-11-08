
"use client";

import { useState } from "react";
import Link from "next/link";
import "../../styles/components/navbar.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Founder", href: "/founder" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="main-navbar">
      <div className="navbar-container">
      <Link href="/" className="navbar-logo">
  <img src="logo/logo3.png" alt="TA Develops Logo" style={{ width: '135px', height: '65px' }} />

 <span className="brand-name">
  <span className="logo-green">TA</span>
  <span className="logo-dot">.</span>
  <span className="logo-green">DEVELOPS</span>
</span>
</Link>
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <i className={menuOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
        </button>

        <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/quote"
            className="navbar-quote-btn"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote <i className="bi bi-arrow-up-right"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}

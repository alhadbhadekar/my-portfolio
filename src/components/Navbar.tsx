"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/content/profile";

const links = [
  { href: "/", label: "Home" },
  { href: "/bio", label: "Bio" },
  { href: "/resume", label: "Resume" },
  { href: "/work", label: "Work" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
//   { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <header className="nav">
      <div className="container">
        <div className="navInner">
          {/* BRAND */}
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            <div className="badge" aria-hidden="true" style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src="/logo.png" 
                alt="Logo" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div>
              <div className="brandTitle">{profile.name}</div>
              <div className="small">{profile.role}</div>
            </div>
          </Link>

          {/* DESKTOP NAV - hidden on mobile via CSS */}
          <nav className="navLinks desktopNav" aria-label="Primary">
            {links.map((l) => (
              <Link key={l.href} className="link" href={l.href}>
                {l.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* HAMBURGER BUTTON - visible only on mobile */}
          <button
            className={`hamburger ${open ? "open" : ""}`}
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobileMenu ${open ? "menuOpen" : ""}`}>
        <nav className="mobileNav">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="mobileLink"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="mobileAction">
             <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
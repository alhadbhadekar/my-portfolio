"use client";

import { useMemo, useState } from "react";
import Section from "@/components/Section";
import { profile } from "@/content/profile";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio Contact: ${name || "Hello"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}\n`);
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }, [name, email, msg]);

  return (
    <Section title="Contact" subtitle="Best way: email. You can also use this quick mail composer.">
      <div className="card cardPad">
        <p className="muted">
          Email: <a className="link" href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>

        <hr className="hr" />

        <div style={{ display: "grid", gap: 10 }}>
          <input className="input" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="input" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea className="input textarea" placeholder="Message" value={msg} onChange={(e) => setMsg(e.target.value)} />
          
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a className="btn btnPrimary" href={mailto}>
              Compose Email
            </a>
            
            {/* LINKEDIN BUTTON WITH IMAGE */}
            <a 
              className="btn" 
              href={profile.links.linkedin} 
              target="_blank" 
              rel="noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <img src="skills/linkedin.svg" alt="" style={{ width: "18px", height: "18px" }} />
              LinkedIn
            </a>

            {/* GITHUB BUTTON WITH IMAGE */}
            <a 
              className="btn" 
              href={profile.links.github} 
              target="_blank" 
              rel="noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <img src="skills/github.png" alt="" style={{ width: "18px", height: "18px" }} />
              GitHub
            </a>
          </div>

          <p className="small">This form doesn’t “send” on GitHub Pages—mailto opens your email client (works on static sites).</p>
        </div>
      </div>
    </Section>
  );
}
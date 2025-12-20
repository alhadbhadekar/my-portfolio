import Section from "@/components/Section";
import { profile } from "@/content/profile";

export default function ResumePage() {
  return (
    <Section title="Resume" subtitle="Download the PDF or view it in a new tab.">
      <div className="card cardPad">
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a className="btn btnPrimary" href="/resume.pdf" download>
            Download Resume (PDF)
          </a>
          <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">
            Open in New Tab
          </a>
          
          <a 
            className="btn" 
            href={profile.links.linkedin} 
            target="_blank" 
            rel="noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            <img src="/skills/linkedin.svg" alt="" style={{ width: 18, height: 18 }} />
            LinkedIn Profile
          </a>
        </div>

        <hr className="hr" />

        <p className="sectionTitle" style={{ marginBottom: 6 }}>Contact</p>
        <div style={{ display: "grid", gap: 8 }}>
          <p className="muted">
            Email: <a className="link" href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            {/* LINKEDIN ICON LINK */}
            <p className="muted" style={{ display: "flex", alignItems: "center", gap: 6, margin: 0 }}>
              LinkedIn: 
              <a 
                className="link" 
                href={profile.links.linkedin} 
                target="_blank" 
                rel="noreferrer"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img src="/skills/linkedin.svg" alt="LinkedIn" style={{ width: 20, height: 20 }} />
              </a>
            </p>

            {/* GITHUB ICON LINK */}
            <p className="muted" style={{ display: "flex", alignItems: "center", gap: 6, margin: 0 }}>
              GitHub: 
              <a 
                className="link" 
                href={profile.links.github} 
                target="_blank" 
                rel="noreferrer"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img src="/skills/github.png" alt="GitHub" style={{ width: 20, height: 20 }} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
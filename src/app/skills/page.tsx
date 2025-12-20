import Section from "@/components/Section";
import { skillSections } from "@/content/skills";

export default function SkillsPage() {
  return (
    <Section title="Skills" subtitle="Core technologies I use to ship production systems.">
      {skillSections.map((sec) => (
        <div key={sec.title} className="card cardPad" style={{ marginBottom: 14 }}>
          <p className="sectionTitle">{sec.title}</p>
          <p className="muted" style={{ marginTop: 6 }}>{sec.subtitle}</p>
          <hr className="hr" />
          <div className="iconGrid">
            {sec.items.map((it) => (
              <div className="iconCard" key={it.label}>
                <span style={{ fontSize: 20, display: "inline-flex" }}>{it.icon}</span>
                <div>
                  <div style={{ fontWeight: 750 }}>{it.label}</div>
                  <div className="small">{it.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}

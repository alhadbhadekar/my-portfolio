import Section from "@/components/Section";
import { profile } from "@/content/profile";

export default function BioPage() {
  return (
    <Section title="Bio" subtitle="A quick snapshot of who I am and what I enjoy building.">
      <div className="card cardPad">
        {profile.longBio.split("\n\n").map((para, i) => (
          <p key={i} className="muted mb-4 leading-relaxed">
            {para}
          </p>
        ))}

        <hr className="hr" />

        <p className="sectionTitle" style={{ marginBottom: 6 }}>
          Highlights
        </p>

        <ul className="list">
          {profile.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

import { siteMeta } from "@/lib/site";
import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontWeight: 750 }}>{profile.name}</div>
          <div className="small">{siteMeta.description}</div>
        </div>
        <div className="small">
          © {new Date().getFullYear()} • Built with Next.js • <a className="link" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

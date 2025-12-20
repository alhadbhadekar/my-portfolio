import { type Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card cardPad">
      <div className="titleRow">
        <div>
          <div className="kicker">{project.category}</div>
          <div className="itemTitle">{project.title}</div>
        </div>
      </div>

      <p className="itemSub">{project.summary}</p>

      <div className="pills">
        {project.stack.slice(0, 8).map((s) => (
          <span key={s} className="pill">{s}</span>
        ))}
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
        {project.links?.github ? (
          <a className="btn" href={project.links.github} target="_blank" rel="noreferrer"><img src="/skills/github.png" alt="" style={{ width: 18, height: 18, opacity: 0.8 }} /></a>
        ) : null}
        {project.links?.demo ? (
            <a
                className="btn"
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
            >
                <img src="/skills/demo.png" alt="" style={{ width: 18, height: 18, opacity: 0.8 }} />
            </a>
            ) : null}
        {project.links?.writeup ? (
          <a className="btn" href={project.links.writeup} target="_blank" rel="noreferrer">Write-up</a>
        ) : null}
      </div>
    </div>
  );
}

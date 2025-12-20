import Section from "@/components/Section";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <Section title="Projects" subtitle="Selected projects with stack + outcomes.">
      <div className="grid3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Section>
  );
}

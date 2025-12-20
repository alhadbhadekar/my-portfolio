import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import { education } from "@/content/education";

export default function EducationPage() {
  return (
    <Section title="Education" subtitle="Degrees, coursework focus, and key notes.">
      <Timeline
        items={education.map((e) => ({
          id: e.id,
          title: e.school,
          subtitle: `${e.degree} • ${e.location}`,
          range: e.range,
          meta: e.focus,
          description: e.notes
        }))}
      />
    </Section>
  );
}

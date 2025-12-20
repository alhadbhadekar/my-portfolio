"use client";

import { useMemo, useState } from "react";
import Section from "@/components/Section";
import Timeline, { TimelineItemData } from "@/components/Timeline";
import Modal from "@/components/Modal";
import { work } from "@/content/work";

export default function WorkPage() {
  const items = useMemo<TimelineItemData[]>(
    () =>
      work.map((w) => ({
        id: w.id,
        title: w.company,
        subtitle: `${w.title} • ${w.location}`,
        range: w.range,
        meta: w.stack,
        description: w.summary,
        bullets: w.bullets
      })),
    []
  );

  const [activeId, setActiveId] = useState<string | null>(null);
  const active = items.find((i) => i.id === activeId) || null;

  return (
    <Section
      title="Work History"
      subtitle="Timeline format. Click any role to open details (what I did, impact, stack)."
    >
      <Timeline items={items} onSelect={(id) => setActiveId(id)} />

      <Modal
        open={!!active}
        onClose={() => setActiveId(null)}
        title={active?.title ?? ""}
        subtitle={active ? `${active.subtitle} • ${active.range}` : ""}
        meta={active?.meta ?? []}
        bullets={active?.bullets ?? []}
      />
    </Section>
  );
}

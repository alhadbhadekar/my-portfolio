"use client";

import { useMemo, useState } from "react";
// Ensure these filenames match exactly (case-sensitive) in your folder
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
        // Passing the logo from your data to the Timeline component
        logo: w.logo, 
        subtitle: `${w.title} • ${w.location}`,
        range: w.range,
        meta: w.stack,
        description: w.summary,
        bullets: w.bullets
      })),
    []
  );

  const [activeId, setActiveId] = useState<string | null>(null);
  
  // Find the active item to display in the Modal
  const active = useMemo(
    () => items.find((i) => i.id === activeId) || null,
    [items, activeId]
  );

  return (
    <Section
      title="Work History"
      subtitle="Timeline format. Click any role to open details (what I did, impact, stack)."
    >
      {/* Ensure your Timeline component is set up to render the 'logo' property */}
      <Timeline items={items} onSelect={(id) => setActiveId(id)} />

      <Modal
        open={!!active}
        onClose={() => setActiveId(null)}
        title={active?.title ?? ""}
        logo={active?.logo}
        subtitle={active ? `${active.subtitle} • ${active.range}` : ""}
        meta={active?.meta ?? []}
        bullets={active?.bullets ?? []}
      />
    </Section>
  );
}
"use client";

export type TimelineItemData = {
  id: string;
  title: string;
  logo?: string;
  subtitle: string;
  range: string;
  meta?: string[];
  description?: string;
  bullets?: string[];
};

export default function Timeline({
  items,
  onSelect
}: {
  items: TimelineItemData[];
  onSelect?: (id: string) => void;
}) {
  return (
    <div className="card cardPad">
      <div style={{ display: "grid", gap: 12 }}>
        {items.map((it) => (
          <div
            key={it.id}
            className="timelineItem"
            role={onSelect ? "button" : undefined}
            tabIndex={onSelect ? 0 : undefined}
            onClick={() => onSelect?.(it.id)}
            onKeyDown={(e) => {
              if (!onSelect) return;
              if (e.key === "Enter" || e.key === " ") onSelect(it.id);
            }}
          >
            <div className="titleRow">
              <div>
                <div className="kicker">{it.range}</div>
                {/* --- Logo placed inside the title container --- */}
                <div className="itemTitle" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  {it.logo && (
                    <img 
                      src={it.logo} 
                      alt="" 
                      style={{ 
                        width: "24px", 
                        height: "24px", 
                        borderRadius: "4px", 
                        objectFit: "contain",
                        flexShrink: 0 
                      }} 
                    />
                  )}
                  <span>{it.title}</span>
                </div>
              </div>
              <div className="small">{it.subtitle}</div>
            </div>

            {it.description ? <p className="itemSub">{it.description}</p> : null}

            {it.meta?.length ? (
              <div className="pills" style={{ marginTop: 10 }}>
                {it.meta.map((m) => (
                  <span key={m} className="pill">{m}</span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
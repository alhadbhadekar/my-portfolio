"use client";

import { useEffect } from "react";

export default function Modal({
  open,
  onClose,
  title,
  subtitle,
  meta,
  bullets
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  meta?: string[];
  bullets?: string[];
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modalOverlay" role="dialog" aria-modal="true" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <div>
            <div className="itemTitle" style={{ fontSize: 20 }}>{title}</div>
            {subtitle ? <div className="small">{subtitle}</div> : null}
          </div>
          <button className="btn" onClick={onClose} type="button">Close</button>
        </div>

        <div className="modalBody">
          {meta?.length ? (
            <div className="pills" style={{ marginTop: 10 }}>
              {meta.map((m) => <span key={m} className="pill">{m}</span>)}
            </div>
          ) : null}

          {bullets?.length ? (
            <>
              <hr className="hr" />
              <p className="sectionTitle" style={{ marginBottom: 6 }}>What I did</p>
              <ul className="list">
                {bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

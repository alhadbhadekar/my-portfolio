"use client";

import { useEffect } from "react";

export default function Modal({
  open,
  onClose,
  title,
  subtitle,
  logo, // Added logo prop
  meta,
  bullets
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  logo?: string; // Added logo type
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
        <div className="modalHeader" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* --- COMPANY LOGO --- */}
            {logo && (
              <img 
                src={logo} 
                alt={title} 
                style={{ 
                  width: '52px', 
                  height: '52px', 
                  borderRadius: '8px', 
                  objectFit: 'contain',
                  background: 'var(--panel-2)',
                  border: '1px solid var(--border)',
                  padding: '4px'
                }} 
              />
            )}
            
            <div>
              <div className="itemTitle" style={{ fontSize: 22, fontWeight: 600 }}>{title}</div>
              {subtitle ? <div className="small" style={{ color: 'var(--muted)', marginTop: 2 }}>{subtitle}</div> : null}
            </div>
          </div>
          
          <button className="btn" onClick={onClose} type="button" style={{ padding: '6px 12px' }}>Close</button>
        </div>

        <div className="modalBody">
          {/* --- TECH STACK PILLS --- */}
          {meta?.length ? (
            <div className="pills" style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {meta.map((m) => <span key={m} className="pill">{m}</span>)}
            </div>
          ) : null}

          {/* --- RESPONSIBILITIES --- */}
          {bullets?.length ? (
            <>
              <hr className="hr" style={{ margin: '20px 0' }} />
              <p className="sectionTitle" style={{ marginBottom: 12, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand)' }}>
                Impact & Responsibilities
              </p>
              <ul className="list">
                {bullets.map((b, i) => (
                  <li key={i} style={{ marginBottom: 8, lineHeight: 1.5 }}>{b}</li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
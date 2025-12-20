export default function Section({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ padding: "28px 0 6px" }}>
      <div style={{ marginBottom: 12 }}>
        <h2 className="sectionTitle" style={{ fontSize: 28, marginBottom: 6 }}>{title}</h2>
        {subtitle ? <p className="muted" style={{ margin: 0 }}>{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

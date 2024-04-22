export function FooterColumn({ title, children, isRow = false }) {
  return (
    <div className="text-lg font-medium tracking-wide text-slate-100/90">
      {title}
      <div className={`mt-6 ${isRow ? "flex gap-8" : "block"}`}>{children}</div>
    </div>
  );
}

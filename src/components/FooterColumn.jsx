export function FooterColumn({ title, children, isRow = false }) {
  return (
    <div className="font-medium tracking-wide text-slate-100/90 lg:text-lg">
      {title}
      <div
        className={`mt-3 lg:mt-6 ${isRow ? "flex gap-4 lg:gap-8" : "block"}`}
      >
        {children}
      </div>
    </div>
  );
}

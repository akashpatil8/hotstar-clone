export default function Button({ size = "small", children }) {
  if (size === "large")
    return (
      <button className="my-3 flex items-center gap-4 rounded-lg bg-slate-100/20 px-14 text-xl font-bold transition-all duration-300 hover:scale-105 hover:bg-slate-100/40">
        {children}
      </button>
    );

  if (size === "small")
    return (
      <button className="my-3 flex items-center gap-4 rounded-lg bg-slate-100/20 px-4 py-3 text-2xl font-bold transition-all duration-300 hover:scale-105 hover:bg-slate-100/40">
        {children}
      </button>
    );
}

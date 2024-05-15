export default function Button({ size = "small", children, onClick }) {
  if (size === "large")
    return (
      <button
        onClick={onClick}
        className="my-2 flex items-center rounded-md bg-slate-100/20 font-bold transition-all duration-300 hover:scale-105 hover:bg-slate-100/40 md:gap-2 md:px-8 md:text-base lg:my-3 lg:gap-4 lg:rounded-lg lg:px-14 lg:text-xl"
      >
        {children}
      </button>
    );

  if (size === "small")
    return (
      <button
        onClick={onClick}
        className="my-2 flex items-center gap-4 rounded-md bg-slate-100/20 px-3 py-3 text-2xl font-bold transition-all duration-300 hover:scale-105 hover:bg-slate-100/40 lg:my-3 lg:rounded-lg lg:px-4"
      >
        {children}
      </button>
    );
}

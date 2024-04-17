import { useNavigate } from "react-router-dom";

export default function SidebarItem({
  icon,
  text,
  navigateTo,
  active,
  expanded,
  setExpanded,
}) {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(navigateTo);
        setExpanded(false);
      }}
      className={`flex h-12 cursor-pointer items-center rounded p-4 transition-all ${active ? " text-white" : ""} group hover:bg-slate-800/40`}
    >
      {icon}
      <span
        className={`overflow-hidden text-slate-400 ${expanded ? "ml-4 w-64 opacity-100" : "w-0 opacity-0"} ${active ? " text-white" : ""} text-lg font-semibold tracking-wide transition-all duration-200 group-hover:text-xl`}
      >
        {text}
      </span>
    </li>
  );
}

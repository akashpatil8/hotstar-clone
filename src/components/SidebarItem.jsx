import { useNavigate } from "react-router-dom";

export default function SidebarItem({
  icon,
  text,
  navigateTo,
  active,
  expanded,
  onClick,
}) {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        onClick();
        navigate(navigateTo);
      }}
      className={`flex h-12 cursor-pointer items-center rounded p-4 transition-all ${active ? "bg-slate-400/10 text-slate-100" : ""} group hover:text-slate-100`}
    >
      {icon}
      <p
        className={`overflow-hidden  ${expanded ? "ml-4 w-64 opacity-100" : "w-0 opacity-0"} ${active ? " text-xl text-slate-100" : "text-slate-400"} text-lg font-semibold tracking-wide transition-all duration-200 group-hover:text-xl group-hover:text-slate-100`}
      >
        {text}
      </p>
    </li>
  );
}

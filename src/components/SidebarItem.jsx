import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SidebarContext } from "./Sidebar";

export default function SidebarItem({ icon, text, navigateTo, active }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li>
      <NavLink
        to={navigateTo}
        className={`flex h-12 cursor-pointer items-center rounded p-4 transition-all ${active ? " text-white" : ""} group hover:bg-slate-800/40`}
      >
        {icon}
        <span
          className={`overflow-hidden text-slate-400 ${expanded ? "ml-4 w-64 opacity-100" : "w-0 opacity-0"} text-lg font-semibold tracking-wide transition-all duration-200 group-hover:text-xl`}
        >
          {text}
        </span>
      </NavLink>
    </li>
  );
}

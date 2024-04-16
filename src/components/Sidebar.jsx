import { FaRegCircleUser } from "react-icons/fa6";
import { PiTelevisionSimple } from "react-icons/pi";
import { BiMoviePlay } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { createContext, useState } from "react";
import SidebarItem from "./SidebarItem";

export const SidebarContext = createContext();

export default function Sidebar() {
  const [expanded, setExpanded] = useState();

  return (
    <aside
      className={`absolute left-0 z-10 h-screen ${expanded ? "from-black-background via-black-background bg-gradient-to-r to-slate-950/0" : "bg-transparent"}`}
    >
      <nav
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className="h-full p-4"
      >
        <div className="mt-4 h-[30%]">
          <img
            src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/v1656431456/web-images/logo-d-plus.svg"
            alt="logo"
            className="h-10 cursor-pointer"
          />
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="ml-2 flex flex-col gap-4 text-slate-700">
            <SidebarItem
              icon={<FaRegCircleUser className="text-xl" />}
              text={"MySpace"}
              navigateTo="/myspace"
            />
            <SidebarItem
              icon={<FiSearch className="text-xl" />}
              text={"Search"}
              navigateTo="search"
            />
            <SidebarItem
              icon={<GoHome className="text-xl" />}
              text={"Home"}
              navigateTo="/home"
              active
            />
            <SidebarItem
              icon={<PiTelevisionSimple className="text-xl" />}
              text={"Series"}
              navigateTo="series"
            />
            <SidebarItem
              icon={<BiMoviePlay className="text-xl" />}
              text={"Movies"}
              navigateTo="movies"
            />
          </ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

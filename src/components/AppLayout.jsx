import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <main className="bg-black-background relative scroll-smooth">
      <Sidebar />
      <Outlet />
    </main>
  );
}

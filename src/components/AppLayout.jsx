import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <main className="bg-black-background relative">
      <Sidebar />
      <Outlet />
    </main>
  );
}

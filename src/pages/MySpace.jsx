import { useState } from "react";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Profile from "../components/Profile";

export default function MySpace() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="absolute left-0 h-screen w-screen overflow-y-scroll bg-gradient-to-b from-slate-900 via-black-background to-black-background pl-24 pr-16 text-slate-100">
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <Profile />}
      <Footer />
    </div>
  );
}

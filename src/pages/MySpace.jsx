import { useUser } from "../context/UserContext";

import Footer from "../components/Footer";
import Login from "../components/Login";
import Profile from "../components/Profile";

export default function MySpace() {
  const { isUserLoggedIn } = useUser();

  return (
    <div className="absolute left-0 h-screen w-screen overflow-y-scroll bg-gradient-to-b from-slate-900 via-black-background to-black-background pl-24 pr-16 text-slate-100">
      {isUserLoggedIn ? <Profile /> : <Login />}

      <Footer />
    </div>
  );
}

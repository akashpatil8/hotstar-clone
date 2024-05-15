import { GrClose } from "react-icons/gr";

import hotStarLogo from "../../public/hotstar-logo.png";
import LoginForm from "./LoginForm";

export default function LoginContainer({ setShowLoginForm }) {
  return (
    <div className="mx-auto flex h-full w-[70%] items-center justify-center">
      <div className="relative w-full rounded-lg bg-slate-700/40  text-center">
        <button
          onClick={() => setShowLoginForm(false)}
          className="absolute right-0 m-4"
        >
          <GrClose className="text-2xl text-slate-400 transition-all duration-200 hover:text-slate-200" />
        </button>
        <p className="mb-4 pt-8 text-3xl font-semibold">
          Login or sign up to continue
        </p>
        <p className="font-medium text-slate-400">
          Start watchin from where you left off, personalise for kids and more
        </p>
        <div className="flex h-[26rem]  w-full items-center">
          <aside className="flex w-[50%] flex-col items-center justify-start p-4">
            <img src={hotStarLogo} alt="hotstar-logo" className="h-48" />
          </aside>
          <div className="h-64 w-[1px] rounded-full bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

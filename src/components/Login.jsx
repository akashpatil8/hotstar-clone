import { useState } from "react";
import { RxQuestionMarkCircled } from "react-icons/rx";

import LoginContainer from "./LoginContainer";
import Button from "../ui/Button";

export default function Login() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <div className="h-screen">
      {showLoginForm ? (
        <LoginContainer setShowLoginForm={setShowLoginForm} />
      ) : (
        <>
          <div className="mt-12 flex h-20 justify-end transition-all duration-100">
            <Button size="large">
              <RxQuestionMarkCircled />
              Help & Support
            </Button>
          </div>
          <div className="mt-24 flex flex-col items-center">
            <img
              src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/feature/myspace/my_space_login_in.png"
              alt=""
            />
            <h1 className="mt-6 font-semibold text-slate-100 lg:text-3xl">
              Login to Disney+ Hotstar
            </h1>
            <p className="mb-8 mt-2 font-medium text-slate-400">
              Start watchin from where you left off, personalise for kids and
              more
            </p>
            <button
              onClick={() => setShowLoginForm(true)}
              className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-900 px-24 py-3 text-lg font-bold transition-all duration-300 hover:scale-105"
            >
              Log In
            </button>
          </div>
        </>
      )}
    </div>
  );
}

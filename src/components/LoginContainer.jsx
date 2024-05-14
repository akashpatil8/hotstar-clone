import { useState } from "react";
import { useForm } from "react-hook-form";
import { GrClose } from "react-icons/gr";
import { FiLock, FiMail } from "react-icons/fi";

import { useUser } from "../context/UserContext";
import hotStarLogo from "../../public/hotstar-logo.png";

export default function LoginContainer({ setShowLoginForm }) {
  const { createUser, loginUser, error: firebaseError, setError } = useUser();
  const [newUser, setNewUser] = useState(false);

  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    const { email, password } = data;
    if (newUser) {
      createUser(email, password);
    } else {
      loginUser(email, password);
    }
  }

  return (
    <div className="mx-auto flex h-full w-[70%] items-center justify-center">
      <div className="relative h-[70%] w-full rounded-lg bg-slate-700/40  text-center">
        <button
          onClick={() => setShowLoginForm(false)}
          className="absolute right-0 m-4"
        >
          <GrClose className="text-2xl text-slate-400 transition-all duration-200 hover:text-slate-200" />
        </button>
        <p className="mb-4 pt-8 text-3xl font-semibold">
          Login or sign up to continue
        </p>
        <p className="mb-8 font-medium text-slate-400">
          Start watchin from where you left off, personalise for kids and more
        </p>
        <div className="flex w-full">
          <aside className="flex w-[50%] flex-col items-center justify-start p-4">
            <img src={hotStarLogo} alt="hotstar-logo" className="h-48" />
          </aside>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-[50%] flex-col items-center p-4 pr-20 text-center"
          >
            <div className="mb-4 flex items-center gap-3 rounded-lg border-[1px] border-slate-500 px-4 py-3 text-blue-50 lg:mb-4 lg:gap-4 lg:px-6 lg:py-3">
              <FiMail className=" text-lg text-slate-500  lg:text-2xl" />
              <input
                className="w-full bg-transparent font-semibold caret-blue-500 placeholder:font-semibold  focus:outline-none lg:text-xl lg:placeholder:text-xl"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="mb-4 flex items-center gap-3 rounded-lg border-[1px] border-slate-500  px-4 py-3 text-blue-50 lg:mb-4 lg:gap-4 lg:px-6 lg:py-3">
              <FiLock className=" text-lg text-slate-500  lg:text-2xl" />
              <input
                className="w-full bg-transparent font-semibold caret-blue-500 placeholder:font-semibold focus:outline-none lg:text-xl lg:placeholder:text-xl"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </div>
            {newUser && (
              <div className="mb-4 flex items-center gap-3 rounded-lg border-[1px] border-slate-500  px-4 py-3 text-blue-50 lg:mb-4 lg:gap-4 lg:px-6 lg:py-3">
                <FiLock className=" text-lg text-slate-500  lg:text-2xl" />
                <input
                  className="w-full bg-transparent font-semibold caret-blue-500 placeholder:font-semibold focus:outline-none lg:text-xl lg:placeholder:text-xl"
                  placeholder="Confirm password"
                  {...register("confirmPassword", { required: true })}
                />
              </div>
            )}
            <button
              type="submit"
              className="w-[60%] rounded-lg bg-gradient-to-r from-blue-600 to-blue-900 py-3 text-lg font-bold transition-all duration-300 hover:scale-105"
            >
              {newUser ? "Sign Up" : "Login"}
            </button>
            {firebaseError && (
              <p className="my-2 capitalize text-red-400">
                {firebaseError.slice(5).replaceAll("-", " ")}
              </p>
            )}
            {newUser ? (
              <p className="my-2 text-slate-400">
                Already have an account?{" "}
                <button
                  onClick={() => {
                    setNewUser(false);
                    setError("");
                  }}
                  className="font-medium underline"
                >
                  Login
                </button>
              </p>
            ) : (
              <p className="my-2 text-slate-400">
                Don&apos;t have an account?{" "}
                <button
                  onClick={() => {
                    setNewUser(true);
                    setError("");
                  }}
                  className="font-medium underline"
                >
                  Sign Up
                </button>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

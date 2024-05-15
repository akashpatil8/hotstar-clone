import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiLock, FiMail } from "react-icons/fi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import { useUser } from "../context/UserContext";

export default function LoginForm() {
  const { createUser, loginUser, error: firebaseError, setError } = useUser();
  const [newUser, setNewUser] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },

    watch,
  } = useForm();

  function onSubmit(data) {
    const { email, password } = data;
    if (newUser) {
      createUser(email, password);
    } else {
      loginUser(email, password);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-[50%] flex-col items-center p-4 pr-20 text-center"
    >
      <div
        className={`flex items-center gap-3 rounded-lg border-[1px] border-slate-500 px-4 py-3 text-blue-50 ${errors?.email?.message ? "" : "lg:mb-4"} lg:gap-4 lg:px-6 lg:py-3`}
      >
        <FiMail className=" text-lg text-slate-500  lg:text-2xl" />
        <input
          className="w-full bg-transparent font-semibold caret-blue-500 placeholder:font-semibold  focus:outline-none lg:text-xl lg:placeholder:text-xl"
          placeholder="Email"
          {...register("email", { required: "Email can't be empty" })}
        />
      </div>
      {errors?.email?.message && (
        <p className="py-1 text-sm text-red-500">{errors.email.message}</p>
      )}

      <div
        className={`flex items-center gap-3 rounded-lg border-[1px] border-slate-500 px-4 py-3 text-blue-50 ${errors?.password?.message ? "" : "lg:mb-4"} lg:gap-4 lg:px-6 lg:py-3`}
      >
        <FiLock className="text-lg text-slate-500 lg:text-2xl" />
        <input
          className="w-full bg-transparent font-semibold caret-blue-500 placeholder:font-semibold focus:outline-none lg:text-xl lg:placeholder:text-xl"
          placeholder="Password"
          type="password"
          {...register("password", { required: "Password can't be empty" })}
        />
      </div>
      {errors?.password?.message && (
        <p className="py-1 text-sm text-red-500">{errors.password.message}</p>
      )}
      {newUser && (
        <>
          <div
            className={`flex items-center gap-3 rounded-lg border-[1px] border-slate-500 px-4 py-3 text-blue-50 ${errors?.confirmPassword?.message ? "" : "lg:mb-4"} lg:gap-4 lg:px-6 lg:py-3`}
          >
            <FiLock className=" text-lg text-slate-500  lg:text-2xl" />
            <input
              className="w-full bg-transparent font-semibold caret-blue-500 placeholder:font-semibold focus:outline-none lg:text-xl lg:placeholder:text-xl"
              placeholder="Confirm password"
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate: (val) => {
                  if (watch("password") !== val)
                    return "Password does not match";
                },
              })}
            />
          </div>
          {errors?.confirmPassword?.message && (
            <p className="py-1 text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </>
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
  );
}

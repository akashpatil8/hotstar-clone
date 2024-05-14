import { RxQuestionMarkCircled } from "react-icons/rx";
import { BsPlusLg } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { useUser } from "../context/UserContext";

import Button from "../ui/Button";

export default function Profile() {
  const { logout } = useUser();
  return (
    <div className="h-screen">
      <div className="mb-12 mt-16 flex items-center justify-between transition-all duration-100">
        <div className="flex flex-col gap-2">
          <p className="pl-4 text-sm font-semibold tracking-wide text-slate-100 sm:text-base md:text-lg lg:text-xl">
            Subscribe to enjoy Disney+ Hotstar {">"}
          </p>
          <p className="pl-4 text-sm font-semibold tracking-wide text-slate-100 sm:text-base md:text-lg lg:text-xl">
            +91 8806666249
          </p>
        </div>
        <div className="flex h-20 gap-4">
          <button
            onClick={() => logout()}
            className="my-3 flex items-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-900 px-14 py-3 text-lg font-bold transition-all duration-300 hover:scale-105"
          >
            <IoLogOutOutline className="text-xl" />
            Logout
          </button>
          <Button size="large">
            <RxQuestionMarkCircled />
            Help & Support
          </Button>
        </div>
      </div>
      <hr className="ml-4 border-slate-800" />
      <div className="mt-10 flex flex-col">
        <p className="pl-4 text-sm font-semibold tracking-wide text-slate-100 sm:text-base md:text-lg lg:text-xl">
          Profiles
        </p>

        <div className="mt-6 flex gap-8 pl-4">
          <div className="cursor-pointer text-center transition-all duration-150 hover:scale-110">
            <img
              src="https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/v1/feature/profile/38.png"
              alt=""
              className="mb-2 h-24 w-24 object-cover "
            />
            <p className="text-lg font-medium text-slate-400">Akash</p>
          </div>
          <div className="cursor-pointer text-center transition-all duration-150 hover:scale-110">
            <img
              src="https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/feature/profile/19.png"
              alt=""
              className="mb-2 h-24 w-24 object-cover "
            />
            <p className="text-lg font-medium text-slate-400">Kids</p>
          </div>
          <div className="cursor-pointer text-center transition-all duration-150 hover:scale-110">
            <div className="mb-2 flex h-24 w-24 items-center justify-center rounded-full bg-slate-600/50">
              <BsPlusLg className="text-3xl" />
            </div>
            <p className="text-lg font-medium text-slate-400">Add</p>
          </div>
        </div>
      </div>
    </div>
  );
}

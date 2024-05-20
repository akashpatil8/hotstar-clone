import { useState } from "react";

const imgUrl =
  "https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/v1/feature/profile/38.png";

export default function CreateProfile({ profiles, setShowCreateProfileForm }) {
  const [profileName, setProfileName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    if (!profileName) return;

    const newProfile = {
      imgUrl,
      profileName,
    };
    profiles.push(newProfile);
    setShowCreateProfileForm(false);
  }

  return (
    <div className="absolute top-0  flex h-screen w-full flex-col items-center bg-gradient-to-b from-slate-900 via-black-background to-black-background p-20">
      <p className="mb-28 pl-4 text-sm font-semibold tracking-wide text-slate-100 sm:text-base md:text-lg lg:text-3xl">
        Create Profile
      </p>
      <button
        onClick={() => setShowCreateProfileForm(false)}
        className="absolute right-10 px-4 text-lg font-medium text-blue-700"
      >
        Cancel
      </button>
      <div className="mb-14 grid h-36 w-36 place-items-center rounded-full border-2 p-1">
        <img
          src={imgUrl}
          alt="profile-img"
          className="rounded-full object-cover"
        />
      </div>
      <form onSubmit={handleSubmit} className="w-[25%]">
        <div
          className={`mb-4 flex items-center gap-3 rounded-lg border-[1px] border-slate-500 px-4 py-3 text-blue-50  lg:gap-4 lg:px-6 lg:py-3`}
        >
          <input
            onChange={(e) => setProfileName(e.target.value)}
            className="w-full bg-transparent font-semibold caret-blue-500 placeholder:font-semibold  focus:outline-none lg:text-xl lg:placeholder:text-xl"
            placeholder="Your name"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-900 py-3 text-lg font-bold transition-all duration-300 hover:scale-105"
        >
          Create your profile
        </button>
      </form>
    </div>
  );
}

import React from "react";

export default function ProfileCard({ profile }) {
  const { imgUrl, profileName } = profile;

  return (
    <div className="cursor-pointer text-center transition-all duration-150 hover:scale-110">
      <img
        src={imgUrl}
        alt="profile-img"
        className="mb-2 h-24 w-24 object-cover "
      />
      <p className="text-lg font-medium text-slate-400">{profileName}</p>
    </div>
  );
}

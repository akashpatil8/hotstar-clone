import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaPlay } from "react-icons/fa6";
import Carousal from "./Carousal";
import { useGetDetails } from "../hooks/useGetDetails";

export default function HeroDetails({ data, mainItem }) {
  const { data: movieDetails, isLoading: isMovieDetailsLoading } =
    useGetDetails(mainItem.id);

  if (isMovieDetailsLoading) return <p>Loading...</p>;

  function formatRuntime(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours > 0 && remainingMinutes > 0) {
      return `${hours}h ${remainingMinutes}m`;
    } else if (hours > 0) {
      return `${hours}h`;
    } else {
      return `${remainingMinutes}m`;
    }
  }

  const runtime = formatRuntime(movieDetails?.runtime);

  return (
    <div className="absolute bottom-28 left-8">
      <span className="text-6xl">
        {movieDetails?.original_name
          ? movieDetails?.original_name
          : movieDetails?.original_title}
      </span>
      <div className="my-8 flex items-center gap-2">
        <p className="text-lg font-bold">
          {movieDetails?.release_date
            ? movieDetails?.release_date?.slice(0, 4)
            : movieDetails?.first_air_date?.slice(0, 4)}
        </p>
        <div className="h-1 w-1 rounded-full bg-white/60"></div>
        <p className="text-lg font-bold">{runtime}</p>
        <div className="h-1 w-1 rounded-full bg-white/60"></div>
        <p className="text-lg font-bold">
          {movieDetails?.original_language?.toUpperCase()}
        </p>
      </div>
      <p className="w-[40%] text-lg text-white/70">
        {movieDetails?.overview?.slice(0, 200) + "..."}
      </p>
      <div className="my-10 flex gap-2">
        {movieDetails?.genres?.map((genre, i) => (
          <div key={genre.id} className="flex items-center gap-2">
            <p className="text-lg font-bold text-white/90">{genre.name}</p>
            {i !== movieDetails.genres.length - 1 && (
              <div className="h-4 w-0.5 bg-white/50"></div>
            )}
          </div>
        ))}
      </div>
      <div className="flex h-20 gap-4 pr-16">
        <button className="my-3 flex items-center gap-4 rounded-lg bg-slate-100/30 px-14 py-3 text-xl font-bold transition-all duration-300 hover:scale-105 hover:bg-slate-100/40">
          <FaPlay />
          Subscribe to watch
        </button>
        <button className="my-3 flex items-center gap-4 rounded-lg bg-slate-100/30 px-4  py-3 text-2xl font-bold transition-all duration-300 hover:scale-105 hover:bg-slate-100/40">
          <BsPlusLg />
        </button>
        <Carousal data={data} />
      </div>
    </div>
  );
}

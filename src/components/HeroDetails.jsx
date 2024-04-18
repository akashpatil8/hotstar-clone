import { BsPlusLg } from "react-icons/bs";
import { FaPlay } from "react-icons/fa6";

import Carousal from "./Carousal";

import { useGetDetails } from "../hooks/useGetDetails";
import { formatRuntime } from "../helper/helper";
import Button from "../utils/Button";

export default function HeroDetails({ data, mainItem }) {
  const { data: movieDetails, isLoading: isMovieDetailsLoading } =
    useGetDetails(mainItem.id);

  if (isMovieDetailsLoading) return <p>Loading...</p>;

  const {
    original_name: originalName,
    original_title: originalTitle,
    release_date: releaseDate,
    first_air_date: firstAirDate,
    original_language: originalLanguage,
    runtime: moiveRuntime,
    overview,
    genres,
  } = movieDetails;

  const runtime = formatRuntime(moiveRuntime);

  return (
    <div className="absolute bottom-28 left-8">
      <span className="text-6xl">
        {originalName ? originalName : originalTitle}
      </span>
      <div className="my-8 flex items-center gap-2">
        <p className="text-lg font-bold">
          {releaseDate ? releaseDate?.slice(0, 4) : firstAirDate?.slice(0, 4)}
        </p>
        <div className="h-1 w-1 rounded-full bg-white/60"></div>
        <p className="text-lg font-bold">{runtime}</p>
        <div className="h-1 w-1 rounded-full bg-white/60"></div>
        <p className="text-lg font-bold">{originalLanguage?.toUpperCase()}</p>
      </div>
      <p className="w-[40%] text-lg text-white/70">
        {overview?.slice(0, 200) + "..."}
      </p>
      <div className="my-10 flex gap-2">
        {genres?.map((genre, i) => (
          <div key={genre.id} className="flex items-center gap-2">
            <p className="text-lg font-bold text-white/90">{genre.name}</p>
            {i !== movieDetails.genres.length - 1 && (
              <div className="h-4 w-0.5 bg-white/50"></div>
            )}
          </div>
        ))}
      </div>
      <div className="flex h-20 gap-4 pr-16">
        <Button size={"large"}>
          <FaPlay />
          Subscribe to watch
        </Button>
        <Button size={"small"}>
          <BsPlusLg />
        </Button>

        <Carousal data={data} />
      </div>
    </div>
  );
}

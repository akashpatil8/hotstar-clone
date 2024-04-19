import { BsPlusLg } from "react-icons/bs";
import { FaPlay } from "react-icons/fa6";

import Carousal from "./Carousal";

import { formatRuntime } from "../helper/helper";
import Button from "../ui/Button";

export default function HeroDetails({ carousalData, mainItem, isOnHomePage }) {
  const runtime = formatRuntime(mainItem?.runtime);

  return (
    <div className="absolute bottom-16 left-4">
      <span className="text-6xl">
        {mainItem?.original_title
          ? mainItem?.original_title
          : mainItem?.original_name}
      </span>
      <div className="my-6 flex items-center gap-2">
        <p className="text-lg font-semibold">
          {mainItem?.release_date
            ? mainItem?.release_date?.slice(0, 4)
            : mainItem?.first_air_date?.slice(0, 4)}
        </p>
        <div className="h-1 w-1 rounded-full bg-white/60"></div>
        <p className="text-lg font-semibold">{runtime}</p>

        <div className="h-1 w-1 rounded-full bg-white/60"></div>
        {/* <p className="">
         {mainItem?.original_language?.toUpperCase()}
          
        </p> */}
        {mainItem?.spoken_languages.length > 1 ? (
          <div className="rounded bg-slate-500/40 px-2 py-1 text-lg font-semibold">
            {mainItem?.spoken_languages.length} Languages
          </div>
        ) : (
          mainItem?.spoken_languages?.map((language) => (
            <p key={language.name} className="text-lg font-semibold">
              {language.english_name}
            </p>
          ))
        )}

        <div className="flex items-center gap-2 text-lg font-semibold">
          {!isOnHomePage &&
            (mainItem?.adult ? (
              <>
                <div className="h-1 w-1 rounded-full bg-white/60"></div>
                <div className=" rounded  bg-red-500/40 px-2 py-1 text-white">
                  Adult
                </div>
              </>
            ) : (
              <>
                <div className="h-1 w-1 rounded-full bg-white/60"></div>
                <div className=" rounded  bg-green-500/40 px-2 py-1 text-white">
                  Family
                </div>
              </>
            ))}
        </div>
      </div>
      <p className="mb-8 w-[40%] text-lg text-white/70">
        {mainItem?.overview?.slice(0, 200) + "..."}
      </p>
      <div className="mb-8 flex gap-2">
        {mainItem?.genres?.map((genre, i) => (
          <div key={genre.id} className="flex items-center gap-2">
            <p className="text-lg font-bold text-white/90">{genre.name}</p>
            {i !== mainItem.genres.length - 1 && (
              <div className="h-4 w-0.5 bg-white/50"></div>
            )}
          </div>
        ))}
      </div>
      {/* {!isOnHomePage && (
        <div className="mb-8 flex gap-2">
          {data?.genres?.map((genre, i) => (
            <div key={genre.id} className="flex items-center gap-2">
              <p className="text-lg font-bold text-white/90">{genre.name}</p>
              {i !== data.genres.length - 1 && (
                <div className="h-4 w-0.5 bg-white/50"></div>
              )}
            </div>
          ))}
        </div>
      )} */}
      <div className="flex h-20 gap-4 pr-16">
        <Button size={"large"}>
          <FaPlay />
          Subscribe to watch
        </Button>
        <Button size={"small"}>
          <BsPlusLg />
        </Button>

        {carousalData?.length > 0 && <Carousal data={carousalData} />}
      </div>
    </div>
  );
}

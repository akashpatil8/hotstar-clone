import { BsPlusLg } from "react-icons/bs";
import { FaPlay } from "react-icons/fa6";

import Carousal from "./Carousal";
import Button from "../ui/Button";

import { formatRuntime } from "../helper/helper";

export default function Hero({ carousalData, item }) {
  return (
    <div className="absolute bottom-16 left-4">
      <h1 className="w-[50%] text-4xl lg:text-6xl">
        {item?.original_title ? item?.original_title : item?.original_name}
      </h1>
      <div className="my-3 flex items-center gap-2 font-semibold lg:my-6 lg:text-lg">
        <p>
          {item?.release_date
            ? item?.release_date?.slice(0, 4)
            : item?.first_air_date?.slice(0, 4)}
        </p>
        <div className="h-1 w-1 rounded-full bg-white/40"></div>
        <p>
          {item?.runtime
            ? formatRuntime(item?.runtime)
            : `${item?.seasons?.length} Seasons`}
        </p>

        <div className="h-1 w-1 rounded-full bg-white/60"></div>

        {item?.spoken_languages?.length > 1 ? (
          <div className="cursor-pointer rounded bg-slate-100/20 px-1.5 py-0.5 ">
            {item?.spoken_languages.length} Languages
          </div>
        ) : (
          item?.spoken_languages?.map((language) => (
            <p key={language.name}>{language.english_name}</p>
          ))
        )}

        <div className="flex items-center gap-2">
          {item?.adult ? (
            <>
              <div className="h-1 w-1 rounded-full bg-white/60"></div>
              <div className="rounded bg-red-500/40 px-1.5 py-0.5 text-white">
                Adult
              </div>
            </>
          ) : (
            <>
              <div className="h-1 w-1 rounded-full bg-white/60"></div>
              <div className="rounded bg-green-500/40 px-1.5 py-0.5 text-white">
                Family
              </div>
            </>
          )}
        </div>
      </div>
      <p className="w-[40%] text-white/70 lg:text-lg">
        {item?.overview?.slice(0, 200) + "..."}
      </p>
      <div className="my-4 flex gap-2 lg:my-8">
        {item?.genres?.map((genre, i) => (
          <div key={genre.id} className="flex items-center gap-2">
            <p className="font-semibold text-white/90 lg:text-lg">
              {genre.name}
            </p>
            {i !== item.genres.length - 1 && (
              <div className="h-4 w-[1px] bg-white/50 lg:w-0.5"></div>
            )}
          </div>
        ))}
      </div>

      <div className="flex h-16 gap-2 pr-16 lg:h-20 lg:gap-4">
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

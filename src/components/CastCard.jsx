import { RxPerson } from "react-icons/rx";

export default function CastCard({ credit }) {
  return (
    <div className="h-full w-20 flex-shrink-0 md:w-24 lg:w-36">
      {credit.profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${credit?.profile_path}`}
          alt={credit?.original_name}
          className="mb-1 h-32 w-full rounded-md object-cover md:h-36 lg:mb-2 lg:h-52"
        />
      ) : (
        <div className="grid h-32 place-items-center rounded-md bg-slate-900 md:h-36 lg:h-52">
          <RxPerson className="text-3xl text-slate-100/20 md:text-5xl lg:text-9xl" />
        </div>
      )}

      <p className="text-xs font-semibold md:text-sm lg:text-lg">
        {credit?.original_name}
      </p>
      <p className="text-xs font-light text-slate-100/50 lg:text-base">
        as {credit?.character}
      </p>
    </div>
  );
}

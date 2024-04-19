import { RxPerson } from "react-icons/rx";

export default function CastCard({ credit }) {
  return (
    <div className="h-full w-36 flex-shrink-0">
      {credit.profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${credit?.profile_path}`}
          alt={credit?.original_name}
          className="h-52 w-full rounded-md object-cover"
        />
      ) : (
        <div className="grid h-52 w-full place-items-center rounded-md bg-slate-900">
          <RxPerson className="text-9xl text-slate-100/20" />
        </div>
      )}

      <p className="text-lg font-semibold">{credit?.original_name}</p>
      <p className="font-light text-slate-100/50">as {credit?.character}</p>
    </div>
  );
}

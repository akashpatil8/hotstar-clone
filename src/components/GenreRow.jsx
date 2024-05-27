import GenreCard from "./GenreCard";

const colors = [
  "bg-slate-400/50",
  "bg-red-400/50",
  "bg-blue-400/50",
  "bg-green-400/50",
  "bg-yellow-400/50",
  "bg-purple-400/50",
  "bg-stone-400/50",
  "bg-pink-400/50",
  "bg-indigo-400/50",
  "bg-gray-400/50",
];

export function GenreRow({ gernesData, isGernesLoading }) {
  if (isGernesLoading) return <p>Loading...</p>;

  return (
    <div className="my-2 lg:my-4">
      <p className="pl-4 text-sm font-semibold tracking-wide text-slate-100 sm:text-base md:text-lg lg:text-xl">
        Popular Genres
      </p>
      <div className="flex h-24 items-center gap-2 overflow-y-scroll pl-4 lg:h-36 lg:gap-4">
        {gernesData?.map((genre, i) => (
          <GenreCard key={genre.id} genre={genre} colors={colors} i={i} />
        ))}
      </div>
    </div>
  );
}

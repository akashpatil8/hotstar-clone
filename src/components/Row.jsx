import Card from "./Card";

export default function Row({
  isLoading,
  data,
  title,
  isRating = false,
  scrollDirection,
}) {
  return (
    <div className="bg-black-background pb-4 pr-4">
      <p className="pl-4 text-2xl font-bold">{title}</p>
      <div
        className={`${isRating ? "gap-6" : ""}  items-center pl-4 ${scrollDirection === "vertical" ? "mt-3 grid grid-cols-7 items-center justify-between gap-y-6" : "flex h-[18.5rem] gap-4 overflow-x-auto"}`}
      >
        {data
          ?.slice(0, 15)
          .map((movie, i) =>
            isLoading ? (
              <div
                key={movie.id}
                className="animate-pulse rounded-md bg-slate-700/40 lg:h-52 lg:w-36 xl:h-64 xl:w-44"
              ></div>
            ) : (
              <Card key={movie.id} movie={movie} isRating={isRating} i={i} />
            ),
          )}
      </div>
    </div>
  );
}

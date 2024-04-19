import CardLoader from "../ui/CardLoader";
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
        {isLoading ? (
          <CardLoader />
        ) : (
          data?.map((movie, i) => (
            <Card key={movie.id} movie={movie} isRating={isRating} i={i} />
          ))
        )}
      </div>
    </div>
  );
}

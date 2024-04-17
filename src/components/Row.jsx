import Card from "./Card";

export default function Row({
  data,
  title,
  isRating = false,
  scrollDirection,
}) {
  return (
    <div className="bg-black-background py-6 pr-4">
      <p className="mb-4 text-2xl font-bold">{title}</p>
      <div
        className={`${isRating ? "gap-8" : "gap-4"} items-center ${scrollDirection === "vertical" ? "grid grid-cols-8 items-center justify-between" : "flex overflow-x-auto"}`}
      >
        {data?.map((movie, i) => (
          <Card key={movie.id} movie={movie} isRating={isRating} i={i} />
        ))}
      </div>
    </div>
  );
}

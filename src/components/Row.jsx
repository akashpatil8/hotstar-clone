import Card from "./Card";

export default function Row({ data, title, isRating = false }) {
  return (
    <div className="bg-black-background py-6 pr-4">
      <p className="mb-4 text-2xl font-bold">{title}</p>
      <div
        className={`flex ${isRating ? "gap-8" : "gap-4"} items-center overflow-x-auto`}
      >
        {data?.map((movie, i) => (
          <Card key={movie.id} movie={movie} isRating={isRating} i={i} />
        ))}
      </div>
    </div>
  );
}

export default function Card({ movie, isRating, i }) {
  return (
    <div
      key={movie.id}
      className="relative w-44 flex-shrink-0 cursor-pointer rounded"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
        alt={movie?.title}
        className="h-60 rounded-md object-cover"
      />
      {isRating && (
        <div className="from-black-background absolute bottom-0 z-10 h-full w-full bg-gradient-to-tr to-transparent text-8xl">
          <span className="absolute -left-5 bottom-0">{i + 1}</span>
        </div>
      )}
    </div>
  );
}

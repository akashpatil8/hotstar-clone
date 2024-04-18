export default function Card({ movie, isRating, i }) {
  return (
    <div
      key={movie.id}
      className="relative w-44 flex-shrink-0 cursor-pointer rounded transition-all duration-100 hover:scale-110"
    >
      {movie?.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
          alt={movie?.title}
          className="h-68 w-44 rounded-md object-cover"
        />
      ) : (
        <div className="grid h-60 w-40 place-items-center rounded-md bg-slate-900 text-xl font-semibold">
          {movie?.original_title ? movie?.original_title : movie?.original_name}
        </div>
      )}
      {isRating && (
        <div className="absolute bottom-0 z-[1] h-full w-full bg-gradient-to-tr from-black-background to-transparent text-8xl">
          <span className="absolute -left-5 bottom-0 font-bold">{i + 1}</span>
        </div>
      )}
    </div>
  );
}

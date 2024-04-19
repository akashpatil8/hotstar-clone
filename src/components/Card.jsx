import { useNavigate } from "react-router-dom";

export default function Card({ movie, isRating, i }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/details/${movie?.id}`);
      }}
      className="relative flex-shrink-0 cursor-pointer rounded transition-all duration-100 hover:scale-110 lg:h-52 lg:w-36 xl:h-64 xl:w-44"
    >
      {movie?.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
          alt={movie?.title}
          className="h-full w-full rounded-md object-cover"
        />
      ) : (
        <div className="grid h-full w-full place-items-center rounded-md bg-slate-900 text-xl font-semibold">
          {movie?.original_title ? movie?.original_title : movie?.original_name}
        </div>
      )}
      {isRating && (
        <div className="absolute bottom-0 z-[1] h-full w-full bg-gradient-to-tr from-black-background to-transparent p-0 text-8xl">
          <span className="absolute -left-5 bottom-0 font-bold">{i + 1}</span>
        </div>
      )}
    </div>
  );
}

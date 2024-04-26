import { useNavigate } from "react-router-dom";

export default function Card({ item, isRating, i }) {
  const navigate = useNavigate();
  const mediaType = item.release_date ? "movie" : "tv";
  const urlTitle = item.original_title
    ? item.original_title.replaceAll(" ", "-")
    : item.original_name.replaceAll(" ", "-");

  return (
    <div className="flex aspect-[3/5] h-32 flex-shrink-0 items-center sm:h-40 md:h-52 lg:h-64 xl:h-72">
      <div
        onClick={() => {
          navigate(`/${mediaType}/${urlTitle}/${item?.id}`, {
            state: { item },
          });
        }}
        className="relative z-20 h-[90%] w-full cursor-pointer rounded transition-all duration-100 hover:scale-110"
      >
        {item?.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
            alt={item?.title}
            className="h-full w-full rounded-md object-cover"
            loading="lazy"
          />
        ) : (
          <div className="grid h-full w-full place-items-center rounded-md bg-slate-900  text-sm font-semibold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {item?.original_title ? item?.original_title : item?.original_name}
          </div>
        )}
        {isRating && (
          <div className="absolute bottom-0 h-full w-full bg-gradient-to-tr from-black-background to-transparent p-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="absolute -left-1 bottom-0 font-bold text-slate-100 md:-left-2 lg:-left-3 xl:-left-4">
              {i + 1}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

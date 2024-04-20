import { useNavigate } from "react-router-dom";

export default function Card({ item, isRating, i }) {
  const navigate = useNavigate();
  const mediaType = item.release_date ? "movie" : "tv";
  const urlTitle = item.original_title
    ? item.original_title.replaceAll(" ", "-")
    : item.original_name.replaceAll(" ", "-");

  return (
    <div
      onClick={() => {
        navigate(`/${mediaType}/${urlTitle}/${item?.id}`, { state: { item } });
      }}
      className="relative flex-shrink-0 cursor-pointer rounded transition-all duration-100 hover:scale-110 lg:h-52 lg:w-36 xl:h-64 xl:w-44"
    >
      {item?.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
          alt={item?.title}
          className="h-full w-full rounded-md object-cover"
        />
      ) : (
        <div className="grid h-full w-full place-items-center rounded-md bg-slate-900 text-xl font-semibold">
          {item?.original_title ? item?.original_title : item?.original_name}
        </div>
      )}
      {isRating && (
        <div className="absolute bottom-0 z-[1] h-full w-full bg-gradient-to-tr from-black-background to-transparent p-0 text-8xl">
          <span className="absolute -left-5 bottom-0 font-bold text-slate-100">
            {i + 1}
          </span>
        </div>
      )}
    </div>
  );
}

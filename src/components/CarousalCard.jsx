import { useNavigate } from "react-router-dom";

export default function CarousalCard({ item }) {
  const navigate = useNavigate();
  const mediaType = item.release_date ? "movie" : "tv";
  const urlTitle = item.original_title
    ? item.original_title.replaceAll(" ", "-")
    : item.original_name.replaceAll(" ", "-");

  return (
    <img
      src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
      alt=""
      onClick={() => {
        navigate(`/${mediaType}/${urlTitle}/${item?.id}`, { state: { item } });
      }}
      className="h-[90%] w-10 cursor-pointer rounded opacity-40 transition-all duration-200 hover:scale-[1.15] hover:opacity-100 lg:w-16"
    />
  );
}

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

export default function Carousal({ data }) {
  const navigate = useNavigate();

  return (
    <div className="relative ml-auto flex w-[40%] justify-between">
      <button className="absolute left-0 z-10 my-1 h-[90%] rounded-l bg-gradient-to-r from-black-background to-transparent px-1.5">
        <SlArrowLeft className="text-xl" />
      </button>
      <div className="flex items-center gap-2 overflow-x-auto">
        {data?.map((item) => (
          <img
            key={item.id}
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt=""
            onClick={() => {
              navigate(`/details/${item?.id}`);
            }}
            className="h-[90%] cursor-pointer rounded opacity-40 transition-all duration-200 hover:scale-[1.15] hover:opacity-100"
          />
        ))}
      </div>
      <button className="absolute right-0 z-10 my-1 h-[90%] rounded-r bg-gradient-to-l from-black-background to-transparent px-1.5">
        <SlArrowRight className="text-xl" />
      </button>
    </div>
  );
}

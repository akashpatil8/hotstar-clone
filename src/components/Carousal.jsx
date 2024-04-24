import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import CarousalCard from "./CarousalCard";

export default function Carousal({ data }) {
  return (
    <div className="relative ml-auto flex w-[40%] justify-between">
      <button className="absolute left-0 z-10 my-1 h-[90%] rounded-l bg-gradient-to-r from-black-background to-transparent px-1.5">
        <SlArrowLeft className="text-xl" />
      </button>
      <div className="flex items-center gap-1 overflow-x-scroll lg:gap-2">
        {data?.map((item) => (
          <CarousalCard key={item?.id} item={item} />
        ))}
      </div>
      <button className="absolute right-0 z-10 my-1 h-[90%] rounded-r bg-gradient-to-l from-black-background to-transparent px-1.5">
        <SlArrowRight className="text-xl" />
      </button>
    </div>
  );
}

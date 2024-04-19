import { useGetDetails } from "../hooks/useGetDetails";
import HeroDetails from "./HeroDetails";

export function Main({
  children,
  carousalData,
  movieID,
  isOnHomePage = false,
}) {
  const { data, isLoading } = useGetDetails(movieID);

  if (isLoading) return <p className="h-screen bg-red-500">laodog.....</p>;

  console.log(data);
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundClip: "fixed",
      }}
      className="relative ml-24 h-screen overflow-x-hidden overflow-y-scroll scroll-smooth bg-black-background text-slate-100"
    >
      <div
        className={`relative ${isOnHomePage ? "h-[90%]" : "h-full"} bg-gradient-to-t from-black-background via-transparent to-transparent`}
      >
        <div className="absolute top-0 h-full w-full bg-gradient-to-r from-black-background via-black-background/50 to-transparent">
          <HeroDetails
            isOnHomePage={isOnHomePage}
            carousalData={carousalData}
            mainItem={data}
          />
        </div>
      </div>

      {children}
    </div>
  );
}

import { useGetTrending } from "../hooks/useGetTrending";
import HeroDetails from "../components/HeroDetails";
import { useGetLatest } from "../hooks/useGetLatest";
import { useGetPopular } from "../hooks/useGetPopular";
import { useGetUpcoming } from "../hooks/useGetUpcoming";
import Row from "../components/Row";
import { useTopRated } from "../hooks/useGetTopRated";

export default function Home() {
  const { trendingData, isLoading: isTrendingLoading } = useGetTrending();
  const { latestData, isLoading: isLatestLoading } = useGetLatest();
  const { popularData, isLoading: isPopularLoading } = useGetPopular();
  const { upcomingData, isLoading: isUpcomingLoading } = useGetUpcoming();
  const { topRatedData, isLoading: isTopRatedLoading } = useTopRated();

  const mainItem = trendingData?.at(
    Math.floor(Math.random() * trendingData?.length),
  );

  if (isTrendingLoading) return <p>Loading...</p>;

  console.log(latestData);

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${mainItem?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundClip: "fixed",
      }}
      className="ml-24 h-screen overflow-x-hidden overflow-y-scroll scroll-smooth text-slate-100"
    >
      <div className="from-black-background relative h-full bg-gradient-to-t via-transparent to-transparent">
        <div className="from-black-background via-black-background/50 absolute top-0 h-full w-full bg-gradient-to-r to-transparent">
          <HeroDetails data={trendingData} mainItem={mainItem} />
        </div>
      </div>
      <Row data={latestData} title={"Now playing"} />
      <Row data={topRatedData} title={"Top Rated"} isRating={true} />
      <Row data={upcomingData} title={"Upcoming"} />
      <Row data={popularData} title={"Popular"} />
    </div>
  );
}

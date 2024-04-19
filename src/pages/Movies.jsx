import { useGetTrending } from "../hooks/useGetTrending";
import { useGetLatest } from "../hooks/useGetLatest";
import { useGetPopular } from "../hooks/useGetPopular";
import { useGetUpcoming } from "../hooks/useGetUpcoming";
import Row from "../components/Row";
import { useTopRated } from "../hooks/useGetTopRated";
import { getRandomItem } from "../helper/helper";
import { Main } from "../components/Main";

export default function Movies() {
  const { latestData, isLoading: isLatestLoading } = useGetLatest();
  const { upcomingData, isLoading: isUpcomingLoading } = useGetUpcoming();
  const { popularData: popularMoiveData, isLoading: isPopularMovieLoading } =
    useGetPopular("movie");

  const { topRatedData: topRatedMovieData, isLoading: isTopRatedMovieLoading } =
    useTopRated("movie");

  return (
    <div className="absolute left-0 h-screen w-screen overflow-y-scroll bg-black-background pl-24 text-slate-100">
      <Row
        data={latestData}
        isLoading={isLatestLoading}
        title={"Latest Movies"}
      />
      <Row
        data={topRatedMovieData}
        title={"Top Rated Movies"}
        isRating={true}
        isLoading={isTopRatedMovieLoading}
      />
      <Row
        data={upcomingData}
        title={"Upcoming movies"}
        isLoading={isUpcomingLoading}
      />
      <Row
        data={popularMoiveData}
        title={"Popular movies"}
        isLoading={isPopularMovieLoading}
      />
    </div>
  );
}

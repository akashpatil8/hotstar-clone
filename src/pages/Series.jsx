import Row from "../components/Row";

import { useGetLatest } from "../hooks/useGetLatest";
import { useGetPopular } from "../hooks/useGetPopular";
import { useGetUpcoming } from "../hooks/useGetUpcoming";
import { useTopRated } from "../hooks/useGetTopRated";
import { useGetTrending } from "../hooks/useGetTrending";

export default function Series() {
  const { trendingData: trendingTVData, isLoading: isTrendingTVLoading } =
    useGetTrending("tv");
  // const { latestData: latestMoviesData, isLoading: isLatestMoviesLoading } =
  //   useGetLatest();
  // const {
  //   upcomingData: upcomingMoviesData,
  //   isLoading: isUpcomingMoviesLoading,
  // } = useGetUpcoming();
  const { popularData: popularTVData, isLoading: isPopularTVLoading } =
    useGetPopular("tv");
  const { topRatedData: topRatedTVData, isLoading: isTopRatedTVLoading } =
    useTopRated("tv");
  return (
    <div className="absolute left-0 h-screen w-screen overflow-y-scroll bg-black-background pl-24 pt-8 text-slate-100">
      <Row
        itemsData={trendingTVData}
        isLoading={isTrendingTVLoading}
        title={"Today's Trending TV"}
      />

      <Row
        itemsData={topRatedTVData}
        isLoading={isTopRatedTVLoading}
        title={"Top Rated TV"}
        isRating={true}
      />

      <Row
        itemsData={popularTVData}
        isLoading={isPopularTVLoading}
        title={"Popular TV"}
      />
    </div>
  );
}

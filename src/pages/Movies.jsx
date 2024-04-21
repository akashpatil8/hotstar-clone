import Row from "../components/Row";

import { useGetLatest } from "../hooks/useGetLatest";
import { useGetPopular } from "../hooks/useGetPopular";
import { useGetUpcoming } from "../hooks/useGetUpcoming";
import { useTopRated } from "../hooks/useGetTopRated";
import { useGetTrending } from "../hooks/useGetTrending";
import { useGetGenres } from "../hooks/useGetGenres";
import { GenreRow } from "../components/GenreRow";

export default function Movies() {
  const {
    trendingData: trendingMoviesData,
    isLoading: isTrendingMoviesLoading,
  } = useGetTrending("movie");
  const { latestData: latestMoviesData, isLoading: isLatestMoviesLoading } =
    useGetLatest();
  const {
    upcomingData: upcomingMoviesData,
    isLoading: isUpcomingMoviesLoading,
  } = useGetUpcoming();
  const { popularData: popularMoiveData, isLoading: isPopularMovieLoading } =
    useGetPopular("movie");
  const { topRatedData: topRatedMovieData, isLoading: isTopRatedMovieLoading } =
    useTopRated("movie");
  const { gernesData: gernesMovieData, isLoading: isGernesMovieLoading } =
    useGetGenres("movie");

  return (
    <div className="absolute left-0 h-screen w-screen overflow-y-scroll bg-black-background pl-24 pt-8 text-slate-100">
      <Row
        itemsData={trendingMoviesData}
        isLoading={isTrendingMoviesLoading}
        title={"Today's Trending Movies"}
      />
      <Row
        itemsData={latestMoviesData}
        isLoading={isLatestMoviesLoading}
        title={"Latest Movies"}
      />
      <Row
        itemsData={topRatedMovieData}
        isRating={true}
        isLoading={isTopRatedMovieLoading}
        title={"Top Rated Movies"}
      />
      <GenreRow
        gernesData={gernesMovieData}
        isGernesLoading={isGernesMovieLoading}
      />
      <Row
        itemsData={upcomingMoviesData}
        isLoading={isUpcomingMoviesLoading}
        title={"Upcoming movies"}
      />
      <Row
        itemsData={popularMoiveData}
        isLoading={isPopularMovieLoading}
        title={"Popular movies"}
      />
    </div>
  );
}

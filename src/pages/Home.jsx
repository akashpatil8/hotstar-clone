import { useGetTrending } from "../hooks/useGetTrending";
import HeroDetails from "../components/HeroDetails";
import { useGetLatest } from "../hooks/useGetLatest";
import { useGetPopular } from "../hooks/useGetPopular";
import { useGetUpcoming } from "../hooks/useGetUpcoming";
import Row from "../components/Row";
import { useTopRated } from "../hooks/useGetTopRated";
import { getRandomItem } from "../helper/helper";
import { Main } from "../components/Main";
import { useGetDetails } from "../hooks/useGetDetails";

export default function Home() {
  const { trendingData, isLoading: isTrendingLoading } = useGetTrending();
  const { latestData, isLoading: isLatestLoading } = useGetLatest();
  const { upcomingData, isLoading: isUpcomingLoading } = useGetUpcoming();
  const { popularData: popularMoiveData, isLoading: isPopularMovieLoading } =
    useGetPopular("movie");
  const { popularData: popularTVData, isLoading: isPopularTVLoading } =
    useGetPopular("tv");

  const { topRatedData: topRatedMovieData, isLoading: isTopRatedMovieLoading } =
    useTopRated("movie");
  const { topRatedData: topRatedTVData, isLoading: isTopRatedTVLoading } =
    useTopRated("tv");

  const mainItem = getRandomItem(trendingData);

  if (isTrendingLoading)
    return (
      <p className="grid h-screen w-screen place-items-center text-4xl">
        Loading.......
      </p>
    );

  return (
    <Main
      carousalData={trendingData}
      movieID={mainItem?.id}
      isOnHomePage={true}
    >
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
        data={topRatedTVData}
        title={"Top Rated TV"}
        isRating={true}
        isLoading={isTopRatedTVLoading}
      />
      <Row
        data={popularMoiveData}
        title={"Popular movies"}
        isLoading={isPopularMovieLoading}
      />
      <Row
        data={popularTVData}
        title={"Popular TV"}
        isLoading={isPopularTVLoading}
      />
    </Main>
  );
}

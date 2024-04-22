import Row from "../components/Row";

import { Main } from "../components/Main";
import { getRandomItem } from "../helper/helper";
import { useGetTrending } from "../hooks/useGetTrending";
import { useGetLatest } from "../hooks/useGetLatest";
import { useGetPopular } from "../hooks/useGetPopular";
import { useGetUpcoming } from "../hooks/useGetUpcoming";
import { useTopRated } from "../hooks/useGetTopRated";
import { Footer } from "../components/Footer";

export default function Home() {
  const { trendingData: trendingAllData, isLoading: isTrendingAllLoading } =
    useGetTrending("all");
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

  const mainItem = getRandomItem(trendingAllData);

  if (isTrendingAllLoading)
    return (
      <p className="grid h-screen w-screen place-items-center text-4xl">
        Loading.......
      </p>
    );

  return (
    <Main
      carousalData={trendingAllData}
      mainItem={mainItem}
      isOnHomePage={true}
    >
      <Row
        itemsData={latestData}
        isLoading={isLatestLoading}
        title={"Latest Movies"}
      />
      <Row
        itemsData={topRatedMovieData}
        title={"Top Rated Movies"}
        isRating={true}
        isLoading={isTopRatedMovieLoading}
      />
      <Row
        itemsData={upcomingData}
        title={"Upcoming movies"}
        isLoading={isUpcomingLoading}
      />
      <Row
        itemsData={topRatedTVData}
        title={"Top Rated TV Shows"}
        isRating={true}
        isLoading={isTopRatedTVLoading}
      />
      <Row
        itemsData={popularMoiveData}
        title={"Popular movies"}
        isLoading={isPopularMovieLoading}
      />
      <Row
        itemsData={popularTVData}
        title={"Popular TV"}
        isLoading={isPopularTVLoading}
      />

      <Footer />
    </Main>
  );
}

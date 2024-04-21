import { GenreRow } from "../components/GenreRow";
import Row from "../components/Row";
import { useGetAiringTodayTV } from "../hooks/useGetAiringTodayTV";
import { useGetGenres } from "../hooks/useGetGenres";

import { useGetPopular } from "../hooks/useGetPopular";
import { useTopRated } from "../hooks/useGetTopRated";
import { useGetTrending } from "../hooks/useGetTrending";

export default function Series() {
  const { trendingData: trendingTVData, isLoading: isTrendingTVLoading } =
    useGetTrending("tv");
  const { gernesData: gernesTVData, isLoading: isGernesTVLoading } =
    useGetGenres("tv");
  const { popularData: popularTVData, isLoading: isPopularTVLoading } =
    useGetPopular("tv");
  const { topRatedData: topRatedTVData, isLoading: isTopRatedTVLoading } =
    useTopRated("tv");
  const { airingToadyTVData, isLoading: isAiringToadyTVDataLoading } =
    useGetAiringTodayTV();

  return (
    <div className="absolute left-0 h-screen w-screen overflow-y-scroll bg-black-background pl-24 pt-8 text-slate-100">
      <Row
        itemsData={airingToadyTVData}
        isLoading={isAiringToadyTVDataLoading}
        title={"Airing Today on TV"}
      />
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

      <GenreRow gernesData={gernesTVData} isGernesLoading={isGernesTVLoading} />

      <Row
        itemsData={popularTVData}
        isLoading={isPopularTVLoading}
        title={"Popular TV"}
      />
    </div>
  );
}

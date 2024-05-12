import { useState } from "react";

import Row from "../components/Row";
import Card from "../components/Card";
import CardLoader from "../ui/CardLoader";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

import { useGetSearched } from "../hooks/useGetSearched";
import { useGetTrending } from "../hooks/useGetTrending";

export default function Search() {
  const [query, setQuery] = useState("");
  const { trendingData: trendingAllData, isLoading: isTrendingAllLoading } =
    useGetTrending("all");
  const {
    mutate,
    isPending: isSearchedLoading,
    searchedData,
  } = useGetSearched();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    mutate(query);
  }

  return (
    <div className="absolute left-0 h-screen max-h-screen w-screen overflow-y-scroll bg-black-background pl-24 pr-16 pt-8 text-slate-100">
      <SearchBar handleSubmit={handleSubmit} setQuery={setQuery} />

      {!searchedData && !query ? (
        <Row
          itemsData={trendingAllData}
          isLoading={isTrendingAllLoading}
          title={"Trending Today"}
          scrollDirection="vertical"
        />
      ) : (
        <div className="pl-4">
          <p className=" text-sm font-semibold tracking-wide text-slate-100 sm:text-base md:text-lg lg:text-xl">
            Top Matched
          </p>

          <div className="flex flex-wrap gap-4">
            {isSearchedLoading &&
              Array.from({ length: 15 }, (i) => <CardLoader key={i} />)}

            {!isSearchedLoading || searchedData?.length > 0 ? (
              searchedData
                ?.slice(0, 15)
                .map((item, i) => <Card key={item.id} item={item} i={i} />)
            ) : (
              <div className="h-[calc(100vh-14rem)] text-2xl font-medium tracking-wide text-slate-100/50">
                No search results found!
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

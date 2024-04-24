import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import Row from "../components/Row";
import Card from "../components/Card";
import CardLoader from "../ui/CardLoader";

import { useGetSearched } from "../hooks/useGetSearched";
import { useGetTrending } from "../hooks/useGetTrending";
import { Footer } from "../components/Footer";

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
            {isSearchedLoading ? (
              Array.from({ length: 15 }, (i) => <CardLoader key={i} />)
            ) : searchedData?.length > 0 ? (
              searchedData
                ?.slice(0, 15)
                .map((item, i) => <Card key={item.id} item={item} i={i} />)
            ) : (
              <p className="text-2xl font-medium tracking-wide text-slate-100/50">
                No search results found!
              </p>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

function SearchBar({ handleSubmit, setQuery }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 ml-4 flex items-center gap-3 rounded-lg bg-slate-700/40 px-4 py-3 text-blue-50 lg:gap-6 lg:px-6 lg:py-4"
    >
      <FiSearch
        type="submit"
        onClick={handleSubmit}
        className="text-lg lg:text-3xl"
      />
      <input
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-transparent font-semibold caret-blue-500 placeholder:font-semibold focus:outline-none lg:text-xl lg:placeholder:text-xl"
        placeholder="Movies, shows and more"
      />
    </form>
  );
}

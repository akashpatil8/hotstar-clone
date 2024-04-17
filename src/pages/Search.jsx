import React from "react";
import { FiSearch } from "react-icons/fi";
import Row from "../components/Row";
import { useQueryClient } from "@tanstack/react-query";

export default function Search() {
  const queryQlient = useQueryClient();
  const data = queryQlient.getQueryData(["trending"]);

  console.log(data.results);

  return (
    <div className="bg-black-background absolute left-0 min-h-screen w-screen pl-28 pr-16 pt-8 text-slate-100">
      <div className="flex gap-6 rounded-lg bg-slate-700/40 px-6 py-4 text-blue-50">
        <FiSearch className="text-3xl" />
        <input
          className="w-full bg-transparent text-xl font-semibold caret-blue-500 placeholder:text-xl placeholder:font-semibold focus:outline-none"
          placeholder="Movies, shows and more"
        />
      </div>
      <Row data={data.results} title={"Trending"} scrollDirection="vertical" />
    </div>
  );
}

import React from "react";

export default function CardLoader() {
  return Array.from({ length: 20 }, (i) => (
    <div
      key={`key${i}`}
      className="animate-pulse rounded-md bg-slate-700/40 lg:h-52 lg:w-36 xl:h-64 xl:w-44"
    ></div>
  ));
}

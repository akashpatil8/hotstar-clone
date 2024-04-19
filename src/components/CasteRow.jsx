import React from "react";
import CastCard from "./CastCard";

export default function CasteRow({ creditsData }) {
  return (
    <div className="bg-black-background pb-10 pr-4">
      <p className="mb-4 pl-4 text-2xl font-bold">Cast</p>
      <div className="flex items-start gap-4 overflow-x-scroll pl-4">
        {creditsData?.slice(0, 10).map((credit) => (
          <CastCard key={credit?.credit_id} credit={credit} />
        ))}
      </div>
    </div>
  );
}

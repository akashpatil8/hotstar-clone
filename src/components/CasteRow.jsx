import React from "react";
import CasteCard from "./CastCard";

export default function CasteRow({ creditsData }) {
  return (
    <div className="bg-black-background pb-10 pr-4">
      <p className="mb-2 pl-4 text-sm font-semibold tracking-wide text-slate-100 sm:text-base md:mb-3 md:text-xl lg:mb-4 lg:text-2xl">
        Cast
      </p>
      <div className="ml-4 flex items-start gap-1 overflow-x-scroll md:gap-2 lg:gap-4">
        {creditsData?.slice(0, 10).map((credit) => (
          <CasteCard key={credit?.credit_id} credit={credit} />
        ))}
      </div>
    </div>
  );
}

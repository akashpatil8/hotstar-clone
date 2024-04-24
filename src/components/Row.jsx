import CardLoader from "../ui/CardLoader";
import Card from "./Card";

export default function Row({
  isLoading,
  itemsData,
  title,
  isRating = false,
  scrollDirection,
}) {
  return (
    <div className="bg-black-background pb-4">
      <p className="pl-4 text-sm font-semibold tracking-wide text-slate-200 sm:text-base md:text-lg lg:text-xl">
        {title}
      </p>
      {itemsData?.length === 0 ? (
        <p className="h-32 pl-4 text-sm text-slate-100/30 sm:h-40 sm:text-base md:h-52 md:text-lg lg:h-64 lg:text-xl xl:mt-8 xl:h-72">
          No data found for this item
        </p>
      ) : (
        <div
          className={` flex items-center pl-4 ${scrollDirection === "vertical" ? " flex-wrap items-start gap-x-1 md:gap-x-2 lg:gap-x-3 xl:gap-x-4" : "gap-1 overflow-x-auto overflow-y-hidden md:gap-2 lg:gap-3 xl:gap-4"}`}
        >
          {itemsData
            ?.slice(0, 15)
            .map((item, i) =>
              isLoading ? (
                <CardLoader key={item.id} />
              ) : (
                <Card key={item.id} item={item} isRating={isRating} i={i} />
              ),
            )}
        </div>
      )}
    </div>
  );
}

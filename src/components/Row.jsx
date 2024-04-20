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
    <div className="bg-black-background pb-4 pr-4">
      <p className=" pl-4 text-xl font-semibold tracking-wide text-slate-100">
        {title}
      </p>
      <div
        className={`${isRating ? "gap-6" : ""} flex items-center pl-4 ${scrollDirection === "vertical" ? " mt-4 flex-wrap items-start gap-4" : "h-72 gap-3 overflow-x-auto overflow-y-hidden"}`}
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
    </div>
  );
}

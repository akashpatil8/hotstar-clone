export function GenreRow({ gernesData, isGernesLoading }) {
  if (isGernesLoading) return <p>Loading...</p>;

  return (
    <div className="flex h-48 items-center gap-4 overflow-y-scroll px-4 py-8">
      {gernesData?.map((genre) => (
        <div
          key={genre.id}
          className="flex h-[90%] w-60 flex-shrink-0 cursor-pointer items-center justify-center rounded-md bg-red-300 text-2xl text-black transition-all duration-200 hover:scale-110"
        >
          {genre.name}
        </div>
      ))}
    </div>
  );
}

export default function GenreCard({ genre, i, colors }) {
  return (
    <div
      key={genre.id}
      className={`flex h-[90%] w-40 flex-shrink-0 cursor-pointer items-center justify-center rounded-md ${colors[i % colors.length]} font-medium text-slate-100 transition-all duration-200 hover:scale-110 lg:w-60 lg:text-xl`}
    >
      {genre.name}
    </div>
  );
}

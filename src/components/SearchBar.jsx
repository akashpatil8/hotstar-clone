import { FiSearch } from "react-icons/fi";

export default function SearchBar({ handleSubmit, setQuery }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 ml-4 flex items-center gap-3 rounded-lg bg-slate-700/40 px-4 py-3 text-blue-50 lg:mb-8 lg:gap-6 lg:px-6 lg:py-4"
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

import { FaPlay } from "react-icons/fa6";
import { BsPlusLg } from "react-icons/bs";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url(https://wallpapercave.com/wp/wp10254453.jpg)",
        backgroundSize: "cover",
        backgroundClip: "fixed",
      }}
      className="ml-24 h-screen w-screen overflow-y-scroll scroll-smooth text-slate-100"
    >
      <div className="from-black-background relative h-full w-full bg-gradient-to-t via-transparent to-transparent">
        <div className="from-black-background via-black-background/50 absolute top-0 h-full w-[60%] bg-gradient-to-r  to-transparent">
          <div className="absolute bottom-36 left-8">
            <span className="text-6xl">Dune</span>
            <div className="my-8 flex items-center gap-2">
              <p className="text-lg font-bold">2024</p>
              <div className="h-1 w-1 rounded-full bg-white/60"></div>
              <p className="text-lg font-bold">2h 34m</p>
              <div className="h-1 w-1 rounded-full bg-white/60"></div>
              <p className="text-lg font-bold">Hindi</p>
            </div>
            <p className="w-[50%] text-lg text-white/70">
              Non minim eiusmod ea ullamco ad. Minim amet ullamco excepteur
              nulla do occaecat labore id magna ex amet anim excepteur.
              Adipisicing ex ad officia labore ex tempor fugiat.
            </p>
            <div className="my-10 flex items-center gap-2">
              <p className="text-lg font-bold text-white/90">Lifestyle</p>
              <div className="h-4 w-0.5 bg-white/50"></div>
              <p className="text-lg font-bold text-white/90">Action</p>
              <div className="h-4 w-0.5 bg-white/50"></div>
              <p className="text-lg font-bold text-white/90">Horror</p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-4 rounded-lg bg-slate-100/30 px-14 py-3 text-xl font-bold transition-all duration-300 hover:scale-105 hover:bg-slate-100/40">
                <FaPlay />
                Subscribe to watch
              </button>
              <button className="flex items-center gap-4 rounded-lg bg-slate-100/30 px-4  py-3 text-2xl font-bold transition-all duration-300 hover:scale-105 hover:bg-slate-100/40">
                <BsPlusLg />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black-background h-screen w-screen"></div>
    </div>
  );
}

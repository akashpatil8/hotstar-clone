import { Main } from "../components/Main";
import { useParams } from "react-router-dom";
import { useGetSimilar } from "../hooks/useGetSimilar";
import Row from "../components/Row";
import { useGetCredits } from "../hooks/useGetCredits";
import CasteRow from "../components/CasteRow";

export default function Details() {
  const { movieId } = useParams();

  const { similarData, isLoading: isSimilarLoading } = useGetSimilar(movieId);
  const { creditsData, isLoading: isCreditsLoading } = useGetCredits(movieId);

  return (
    <Main movieID={movieId}>
      <CasteRow creditsData={creditsData} />
      <Row
        data={similarData}
        isLoading={isSimilarLoading}
        title={"More like this"}
      />
    </Main>
  );
}

{
  /* <div className="bg-black-background px-4">
        <p className="mb-3 text-2xl font-bold">Cast</p>
        <div className="flex gap-4  overflow-x-scroll ">
          {creditsData?.cast?.map((credit) => (
            <div
              key={credit?.credit_id}
              className="h-32 w-28 flex-shrink-0 bg-red-700"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${credit?.profile_path}`}
                alt=""
                className="h-[80%] w-full  rounded object-cover"
              />
              <p>{credit?.original_name}</p>
              <p>{credit?.character}</p>
            </div>
          ))}
        </div>
      </div> */
}
{
  /* <div className="bg-black-background pb-4 pr-4">
      <p className="pl-4 text-2xl font-bold">{title}</p>
      <div
        className={`${isRating ? "gap-6" : ""}  items-center pl-4 ${scrollDirection === "vertical" ? "mt-3 grid grid-cols-7 items-center justify-between gap-y-6" : "flex h-[18.5rem] gap-4 overflow-x-auto"}`}
      >
        {isLoading ? (
          <CardLoader />
        ) : (
          data?.map((movie, i) => (
            <Card key={movie.id} movie={movie} isRating={isRating} i={i} />
          ))
        )}
      </div>
    </div> */
}

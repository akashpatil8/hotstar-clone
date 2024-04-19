import { useParams } from "react-router-dom";

import Row from "../components/Row";
import CasteRow from "../components/CasteRow";

import { Main } from "../components/Main";
import { useGetSimilar } from "../hooks/useGetSimilar";
import { useGetCredits } from "../hooks/useGetCredits";

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

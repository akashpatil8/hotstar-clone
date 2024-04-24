import { useLocation } from "react-router-dom";

import Row from "../components/Row";
import CasteRow from "../components/CasteRow";
import Footer from "../components/Footer";

import { Main } from "../components/Main";
import { useGetSimilar } from "../hooks/useGetSimilar";
import { useGetCredits } from "../hooks/useGetCredits";

export default function Details() {
  const location = useLocation();

  const { item } = location.state;
  const mediaType = item?.release_date ? "movie" : "tv";
  const itemId = item?.id;

  const { similarData, isLoading: isSimilarLoading } = useGetSimilar({
    itemId,
    mediaType,
  });
  const { creditsData, isLoading: isCreditsLoading } = useGetCredits({
    itemId,
    mediaType,
  });

  console.log(creditsData);

  return (
    <Main mainItem={item}>
      {creditsData?.length > 0 && <CasteRow creditsData={creditsData} />}
      <Row
        itemsData={similarData}
        isLoading={isSimilarLoading}
        title={"More like this"}
      />

      <Footer />
    </Main>
  );
}

import React, { useEffect, useState } from "react";
import { Main } from "../components/Main";
import { useLocation, useParams } from "react-router-dom";
import { getSimilar } from "../services/apiData";
import { useGetSimilar } from "../hooks/useGetSimilar";
import Row from "../components/Row";

export default function Details() {
  const { movieId } = useParams();

  const { similarData, isLoading: isSimilarLoading } = useGetSimilar(movieId);

  return (
    <Main movieID={movieId}>
      <Row
        data={similarData}
        isLoading={isSimilarLoading}
        title={"More like this"}
      />
    </Main>
  );
}

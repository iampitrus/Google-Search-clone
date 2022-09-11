import { useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../contexts/ResultContextProvider";
import Loading from "./Loading";

function Results() {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  isLoading && <Loading />;

  return <div>Results</div>;
}

export default Results;

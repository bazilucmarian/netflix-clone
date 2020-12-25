import React from "react";
import useContent from "../components/custom-hooks/use-content";
import selectionFilter from "../utils/selection-filter";

import BrowseContainer from "../containers/browse";

const Browse = () => {
  // we need the seerues and the filmstri
  const { series } = useContent("series");
  console.log(series);
  const { films } = useContent("films");
  // we need slides
  const slides = selectionFilter({ series, films });
  // pass it to the browse container

  return <BrowseContainer slides={slides} />;
};
export default Browse;

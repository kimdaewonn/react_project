import React from "react";
import Contents from "../layout/Contents";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import SearchBar from "../layout/SearchBar";

import YoutubeSlider from "../include/YoutubeSlider";

const Youtube = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <Contents>
        <YoutubeSlider />
      </Contents>
      <Footer />
    </>
  );
};

export default Youtube;

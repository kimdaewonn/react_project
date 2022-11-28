import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import SearchBar from "../layout/SearchBar";
import Footer from "../layout/Footer";
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

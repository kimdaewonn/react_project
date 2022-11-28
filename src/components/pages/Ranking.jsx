import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import SearchBar from "../layout/SearchBar";
import Footer from "../layout/Footer";
import RankingCont from "../include/RankingCont";

const Ranking = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <Contents>
        <RankingCont />
      </Contents>
      <Footer />
    </>
  );
};

export default Ranking;

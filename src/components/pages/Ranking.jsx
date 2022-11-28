import React from "react";
import Contents from "../layout/Contents";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import SearchBar from "../layout/SearchBar";

const Ranking = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <Contents></Contents>
      <Footer />
    </>
  );
};

export default Ranking;

import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import SearchBar from "../layout/SearchBar";
import Footer from "../layout/Footer";
import MainCont from "../include/MainCont";

const Youtube = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <Contents>
        <MainCont />
      </Contents>
      <Footer />
    </>
  );
};

export default Youtube;

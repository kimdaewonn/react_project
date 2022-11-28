import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import SearchBar from "../layout/SearchBar";
import Footer from "../layout/Footer";
import ClassCont from "../include/ClassCont";

const Classfication = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <Contents>
        <ClassCont />
      </Contents>
      <Footer />
    </>
  );
};

export default Classfication;

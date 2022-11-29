import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import SearchBar from "../layout/SearchBar";
import Footer from "../layout/Footer";
import MainCont from "../include/MainCont";
import MainSlider from "../include/MainSlider";

const Main = () => {
  const [random, setRandom] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/kimdaewonn/react_project/main/src/Utils/main.json"
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.searches))
      .then((result) => setRandom(result.searches))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <SearchBar />
      <Contents>
        <MainCont />
        <MainSlider random={random} />
      </Contents>
      <Footer />
    </>
  );
};

export default Main;

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

  // const search = async (query) => {
  //   await fetch(``)
  //     .then((response) => response.json())
  //     .then((result) => setImages(result.results))
  //     .catch((error) => console.log("error", error));
  // };
  useEffect(() => {
    // fetch("https://yummly2.p.rapidapi.com/categories/list")
    //   .then((response) => response.json())
    //   .then((result) => setImages(result))
    //   .catch((error) => console.log("error", error));

    fetch("https://yummly2.p.rapidapi.com/categories/list")
      .then((response) => response.json())
      // .then((result) => setRandom(result))
      .then((searches) => console.log(searches))
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

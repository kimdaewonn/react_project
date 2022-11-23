import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HeaderCont } from "./components";
import { MainConts } from "./components";
import { RankingConts } from "./components";
import { FooterCont } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderCont />
      <Routes>
        <Route path="/" element={<MainConts />}></Route>
      </Routes>
      <RankingConts />
      <FooterCont />
    </BrowserRouter>
  );
};

export default App;

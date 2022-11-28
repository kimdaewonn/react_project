import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Ranking from "./components/pages/Ranking";
import Youtube from "./components/pages/Youtube";
import Classfication from "./components/pages/Classfication";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/ranking" element={<Ranking />}></Route>
        <Route path="/youtube" element={<Youtube />}></Route>
        <Route path="/class" element={<Classfication />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

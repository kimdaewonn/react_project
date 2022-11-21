import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HeaderCont } from "./components";
import { MainConts } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderCont />
      <Routes>
        <Route path="/" element={<MainConts />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

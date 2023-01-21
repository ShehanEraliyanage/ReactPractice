import React from "react";
import { BrowserRouter,Swich,Route,Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home"



const App = ()=> {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

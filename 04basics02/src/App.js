import React from "react";
import { BrowserRouter,Swich,Route,Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import PureComp from './components/PureComp'
import PureCompF from "./components/purecompF";



const App = ()=> {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/pureComp" element={<PureComp/>} />
          <Route path="/pureCompF" element={<PureCompF/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

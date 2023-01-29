import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import PureComp from "./components/PureComp";
import PureCompF from "./components/purecompF";
import Adjel from "./components/adjel";
import Profile from "./components/profile";
import User from "./components/user";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/adjel" element={<Adjel />} />
          <Route path="/pureComp" element={<PureComp />} />
          <Route path="/pureCompF" element={<PureCompF />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'

import Home from './components/Home';
import Posts from './components/Posts';
import Profile from './components/profile';
import PostItem from "./components/PostItem";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/posts/:id" element={<PostItem/>}/>
          <Route path="/profile" element={<Profile />} />
        </Routes>
        </div>
        
    </BrowserRouter>
  )
}

export default App;
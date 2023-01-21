import React from "react";
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'

import Home from './components/Home';
import Posts from './components/Posts';
import Profile from './components/Profile';
import PostItem from "./components/PostItem";

const App = () => {
  return (
    <BrowserRouter>
      
        <header>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <Link className="p-2 text-dark" to="/">Home</Link> -
              <Link className="p-2 text-dark" to="/posts">Posts</Link> - 
              <Link className="p-2 text-dark" to={{
                pathname:'/profile',
                hash:'#francis',
                search:'?true=enabled'
              }}>Profile</Link>
            </nav>
          </div>
      </header>
      
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
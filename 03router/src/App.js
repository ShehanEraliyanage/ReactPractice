import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Post from './components/Posts';
import Profile from './components/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/posts" element={<Post/> } />
        <Route path="/profile" element={<Profile/> }/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
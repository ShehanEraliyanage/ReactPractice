import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


// COMPONENTS
import Header from './components/Header';
import CssTr from './components/CSStransition';
import Tgroup from './components/Tgroup';
import TransitionComp from './components/Transition';


const App = () => {
  return(
    <BrowserRouter>
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/transition" element={<TransitionComp/>}></Route>
          <Route path="/csstransition" element={<CssTr/>}></Route>
          <Route path="/tgroup" element={<Tgroup/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;

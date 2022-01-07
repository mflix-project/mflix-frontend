/*eslint-disable*/
import React from 'react';
import './App.css';
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail'
import Theaters from './components/Theaters';
import About from './components/About';
import {  Route, Routes } from "react-router-dom";

import TheaterDetail from './components/TheaterDetail';

function App() {

  return (
   
    <div className="background">
     
                        <Routes>
                            <Route exact path='/' element={<Movies />} />
                            <Route path='/movies' element={<Movies />} />
                            <Route path='/movies/:id' element={<MovieDetail/>} />
                            <Route path='/theaters' element={<Theaters />} />
                            <Route path='/theaters/:id2' element={<TheaterDetail />} />
                            <Route path='/about' element={<About />} />
                        </Routes>
                      
    </div>

  );
}

export default App;
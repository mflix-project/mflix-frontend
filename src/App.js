/*eslint-disable*/
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail'
import Theaters from './components/Theaters';
import About from './components/About';

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
   
    <div className="background">
      <NavBar />
      
            <BrowserRouter>
                        <Routes>
                            <Route exact path='/' element={<Movies />} />
                            <Route path='/movies' element={<Movies />} />
                            <Route path='/movies/detail' element={<MovieDetail />} />
                            <Route path='/theaters' element={<Theaters />} />
                            <Route path='/about' element={<About />} />
                        </Routes>
            </BrowserRouter>

        
    </div>







  );
}

export default App;
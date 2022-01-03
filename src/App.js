/*eslint-disable*/
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail'
import Theaters from './components/Theaters';
import About from './components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Loading from './components/Loading';
import { useEffect, useState} from 'react';
import { Card} from 'react-bootstrap';

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 


  useEffect(() => {
  axios("https://mflix-jun.herokuapp.com/api/movies?page=1&perPage=14")
  .then((response) => {
  setData(response.data);
  })
  .catch((error) => {
  console.error("Error fetching data: ", error);
  setError(error);
  })
  .finally(() => {
  setLoading(false);
  });
  }, []);
  if (loading) return (<Loading />);
  if (error) return  (
    <Card className='p-3'style={{ width: '100rem' }}>
        <Card.Title>Something is wrong while fetching data</Card.Title>
        <Card.Text>{error.message}</Card.Text>
    </Card>
    );
 


  return (
   
    <div className="background">
      <NavBar />
      
            <BrowserRouter>
                        <Routes>
                            <Route exact path='/' element={<Movies movie={data} />} />
                            <Route path='/movies' element={<Movies movie={data}  />} />
                            <Route path='/movies/:id' element={<MovieDetail movie={data} />} />
                            <Route path='/theaters' element={<Theaters />} />
                            <Route path='/about' element={<About />} />
                        </Routes>
            </BrowserRouter>

        
    </div>







  );
}

export default App;
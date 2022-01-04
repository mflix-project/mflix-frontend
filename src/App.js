/*eslint-disable*/
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail'
import Theaters from './components/Theaters';
import About from './components/About';
import {  Route, Routes, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Loading from './components/Loading';
import { useEffect, useState} from 'react';
import { Pagination, Card} from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

function App() {
  const perPage = 28;
  // let location = useLocation();
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function previousPage() {
    if (page > 1) setPage(page - 1);
 };

  function nextPage() {
      setPage(page + 1);
  };




  useEffect(() => {
    
      let url;
      const query = new URLSearchParams(url);
     // let query = queryString.parse(location.search);
    
      // if (query.has("title")) {
      //     url = `https://mflix-jun.herokuapp.com/api/movies?title=${query.getAll("title")}`;
      //   }
      // else {
        url = `https://mflix-jun.herokuapp.com/api/movies?page=${page}&perPage=${perPage}`;
      //}

      axios(url)
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
      }, [page, error]);
  

      
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
                        <Routes>
                            <Route exact path='/' element={<Movies movie={data} setData={setData} previousPage={previousPage} nextPage={nextPage} page={page} />} />
                            <Route path='/movies' element={<Movies movie={data} setData={setData} previousPage={previousPage} nextPage={nextPage} page={page} />} />
                            <Route path='/movies/:id' element={<MovieDetail movie={data} />} />
                            <Route path='/theaters' element={<Theaters />} />
                            <Route path='/about' element={<About />} />
                        </Routes>
                      
    </div>







  );
}

export default App;
/*eslint-disable*/
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail'
import Theaters from './components/Theaters';
import About from './components/About';
import {  Route, Routes } from "react-router-dom";
import axios from "axios";
import Loading from './components/Loading';
import { useEffect, useState} from 'react';
import {  Card} from 'react-bootstrap';
import queryString from 'query-string';


function App() {
  const perPage = 28;
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [render,setRender] = useState(false);

  function previousPage() {
    if (page > 1) setPage(page - 1);
 };

  function nextPage() {
      setPage(page + 1);
  };



  useEffect(() => {
     
      let url;
      let query = queryString.parse(location.search);

      if (query.title) {
          url = `https://mflix-jun.herokuapp.com/api/movies?title=${query.title}`;
        }
      else {
        url = `https://mflix-jun.herokuapp.com/api/movies?page=${page}&perPage=${perPage}`;
      }

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
      setRender(false);
     
      }, [page,error,render]);

      
  if (loading) return (<Loading />);
  if (error) return  (
    <Card className='p-3'style={{ width: '100rem' }}>
        <Card.Title>Something is wrong while fetching data</Card.Title>
        <Card.Text>{error.message}</Card.Text>
    </Card>
    );
 
   

  return (
   
    <div className="background">
      <NavBar setRender={setRender} setPage={setPage}/>
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
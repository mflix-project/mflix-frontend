/*eslint-disable*/
import Movie from './Movie.js';
import { Container, Row, Dropdown,  Pagination} from 'react-bootstrap';
import queryString from 'query-string';
import axios from "axios";
import Loading from './Loading';
import { useEffect, useState} from 'react';
import {  Card} from 'react-bootstrap';
import MovieNavBar from './MovieNavBar';

export default function Movies(){

    const perPage = 28;
    const [page, setPage] = useState(1);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [render,setRender] = useState(false);
    
    
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
    .finally(() => {setLoading(false);
    });
    
    return setRender(false);
   
    }, [page,error,render]);

    
    if (loading) return (<Loading />);
    if (error) return  (
      <Card className='p-3'style={{ width: '100rem' }}>
          <Card.Title>Something is wrong while fetching data</Card.Title>
          <Card.Text>{error.message}</Card.Text>
      </Card>
      );
    

    function descendingOrder(){
      var movieArray = [...data];
      var descendingArray = movieArray.sort((a,b)=>{
        return b.year-a.year;
      });
      setData(descendingArray);
    };


    function ascendingOrder(){
      var movieArray = [...data];
      var ascendingArray = movieArray.sort((a,b)=>{
        return a.year-b.year;
      });
      setData(ascendingArray);
    };


    function previousPage() {
      if (page > 1) setPage(page - 1);
   };
  

    function nextPage() {
        setPage(page + 1);
    };

    return(
      <>
      {console.log("movies")}
      <MovieNavBar setRender={setRender} setPage={setPage}/>      
      <div style={{paddingTop:'1%'}}>
        <h1 className='pageHeader'>Movies</h1>
        <Dropdown className="d-inline mx-2 dropdownStyle">
          <Dropdown.Toggle id="dropdown-autoclose-true"  variant="dark" >
             Filter
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={descendingOrder}>Latest</Dropdown.Item>
            <Dropdown.Item onClick={ascendingOrder}>Oldest</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
        <br></br>
       
      {
        !Array.isArray(data)||data.length===0?
        <p className='non-found'>
          No Results Found For{' '}
          "{queryString.parse(location.search).title}"
        </p>  
          :
          <div>
        <Container className="cntCenter" >
        <Row>
          {
           data&&data.length? data.map((val,i)=>{
              return(
                <Movie key={i} movie={data} i={i} />
              )
            }):null
          }
        </Row> 
      </Container>
     
      <Pagination className="center">
        <Pagination.Prev onClick={previousPage}/>
        <Pagination.Item disabled={true}>{page}</Pagination.Item>
        <Pagination.Next onClick={nextPage} />
      </Pagination>
      </div>
      }
      
    </>
    )
}
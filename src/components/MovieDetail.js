/*eslint-disable*/
import * as React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import {Button, Card, Container,Row, Col} from 'react-bootstrap';
import moment from 'moment'
import noImage from './noImage.png'
import Loading from './Loading';
import { useEffect, useState} from 'react';
import MovieNavBar from './MovieNavBar';

export default function MovieDetail(){
  
      const [data,setData] = useState(null);
      const [page, setPage] = useState(1);
      const [loading, setLoading] = useState(true);
      let navigate = useNavigate();
      const [render,setRender] = useState(false);
      let {id} = useParams();
      

      useEffect(() => {
       

        fetch(`https://mflix-jun.herokuapp.com/api/movies/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(
                        'Could not fetch the requested movie info'
                    );
                }
                return res.json();
            })
            .then((result) => {
                if (result.hasOwnProperty('_id')) {
                   setData(result);
                } else {
                   setData(null);
                }
            })
            .catch((err) => {
                console.error(
                    `Something is wrong while fetching movie info - ${err}`
                );
            })
            .finally(() => setLoading(false))
    }, [id]);

   

    if (loading) return (<Loading />);

      function min(runTime){
        
        if(runTime>1)
        {
         return "mins"
        }
        else{
          return "min" 
        }
      }

      function writer(){
        if(data.writers)
        {
          return data.writers.join(', ')
        }
      
      }

      function poster(){
        if(data.poster)
        {
            return data.poster;
         }
        else
        {   
            return noImage;
        }
    }

    return (
        <>
        <MovieNavBar setRender={setRender} setPage={setPage}/>     
        <Card className="p-4"  style={{ width: '70%' }}>
          <Container >
            <Row>
              <Col className ="center" sm={3} >
                 <img width={150} height = {220} src={poster()} onError={(e)=>{e.target.onerror = null; e.target.src=noImage}}/>
                </Col>
              <Col sm={9}>
                <h1 style={{ fontSize: "2rem" }}>{data.title}</h1>
                <div  className="p-3">
                  <p>Release date: {moment(data.released).format('ll')}</p>
                  <p>Length: {data.runtime}{min(data.runtime)}</p>
                  <p>Genres: {data.genres.join(", ")}</p>
                </div>
              </Col>
            </Row>
          </Container>
        
         <Card.Body>
          <hr/>
           <Card.Title>Synopsis</Card.Title>
           <Card.Text>
           {data.fullplot}
           <hr/>
           </Card.Text>
           <Card.Title>Cast</Card.Title>
           <Card.Text>
           {data.cast.join(", ")}
           <hr/>
           </Card.Text>
           <Card.Title>Direcotrs</Card.Title>
           <Card.Text>
           {data.directors.join(", ")}   
           <hr/>
           </Card.Text>
           <Card.Title>Writers</Card.Title>
           <Card.Text>
           {writer()}
           <hr/>
           </Card.Text>
           <Card.Title>Country</Card.Title>
           <Card.Text>
           {data.countries.join(", ")}
           </Card.Text>
           <div className ="center" >
           <Button variant="primary" onClick={()=>{
             navigate('/theaters');
           }}>Check out Theaters</Button>
           </div> 
         </Card.Body>
       </Card>

       </> 
    )
}
/*eslint-disable*/
import * as React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import {Button, Card, Container,Row, Col, Image} from 'react-bootstrap';
import moment from 'moment'
import noImage from './noImage.png'

export default function MovieDetail(props){

      let navigate = useNavigate();
      let {id} = useParams();
      var matchedMovie = props.movie.find((val)=>{
        return id == val._id;
      });

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
        if(matchedMovie.writers)
        {
          return matchedMovie.writers.join(', ')
        }
      
      }

      function poster(){
        if(matchedMovie.poster)
        {
            return matchedMovie.poster;
         }
        else
        {   
            return noImage;
        }
    }

    return (
        <>
      
        
        <Card className="p-4"  style={{ width: '70%' }}>
          <Container >
            <Row>
              <Col className ="center" sm={3} >
                 <img width={150} height = {220} src={poster()} onError={(e)=>{e.target.onerror = null; e.target.src=noImage}}/>
                </Col>
              <Col sm={9}>
                <h1 style={{ fontSize: "2rem" }}>{matchedMovie.title}</h1>
                <div  className="p-3">
                  <p>Release date: {moment(matchedMovie.released).format('ll')}</p>
                  <p>Length: {matchedMovie.runtime}{min(matchedMovie.runtime)}</p>
                  <p>Genres: {matchedMovie.genres.join(", ")}</p>
                </div>
              </Col>
            </Row>
          </Container>
        
         <Card.Body>
         <hr/>
           <Card.Title>Synopsis</Card.Title>
           <Card.Text>
           {matchedMovie.fullplot}
           <hr/>
           </Card.Text>
           <Card.Title>Cast</Card.Title>
           <Card.Text>
           {matchedMovie.cast.join(", ")}
           <hr/>
           </Card.Text>
           <Card.Title>Direcotrs</Card.Title>
           <Card.Text>
           {matchedMovie.directors.join(", ")}   
           <hr/>
           </Card.Text>
           <Card.Title>Writers</Card.Title>
           <Card.Text>
           {writer()}
           <hr/>
           </Card.Text>
           <Card.Title>Country</Card.Title>
           <Card.Text>
           {matchedMovie.countries.join(", ")}
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
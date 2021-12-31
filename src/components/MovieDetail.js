/*eslint-disable*/
import * as React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import {Button, Card, Container,Row, Col, Image} from 'react-bootstrap';

export default function MovieDetail(props){

      let navigate = useNavigate();
      let {id} = useParams();
      var matchedMovie = props.movie.find((val)=>{
        return id == val._id;
      });

    return (
        <>
      
        
        <Card className="p-4"  style={{ width: '70%' }}>
          <Container >
            <Row>
              <Col className ="center" sm={3} >
                <Image variant="top" src={matchedMovie.poster} width={150} height = {220} />
                </Col>
              <Col sm={9}>
                <h1 style={{ fontSize: "2rem" }}>{matchedMovie.title}</h1>
                <div  className="p-3">
                  <p>Release date: {matchedMovie.released}</p>
                  <p>Length: {matchedMovie.runtime}mins</p>
                  <p>Genres: {matchedMovie.genres}</p>
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
           {matchedMovie.cast}
           <hr/>
           </Card.Text>
           <Card.Title>Direcotrs</Card.Title>
           <Card.Text>
           {matchedMovie.directors}   
           <hr/>
           </Card.Text>
           <Card.Title>Writers</Card.Title>
           <Card.Text>
           {matchedMovie.writers}
           <hr/>
           </Card.Text>
           <Card.Title>Country</Card.Title>
           <Card.Text>
           {matchedMovie.countries}
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
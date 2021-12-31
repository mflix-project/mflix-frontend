/*eslint-disable*/
import { useEffect, useState} from 'react';
import Movie from './Movie.js';

import Page  from './Pagination';
import {  Container, Row, Card} from 'react-bootstrap';


export default function Movies(props){
 
 
    return(
      <>
 
   
        <h1 style={{fontSize:25, color:'black', fontWeight:'bold',paddingLeft:'10%',paddingTop:'1%',marginBottom:0}}>Movies</h1>
      
        <Container className="cntCenter" >
        <Row >
        
        {
          props.movie.map((val,i)=>{
            return(
              // <Movie movie={data} i={i} />
              <Movie key={i} movie={props.movie} i={i} />
            )
          })
        }
        </Row> 
      </Container>
      <Page />
    </>
    )
}
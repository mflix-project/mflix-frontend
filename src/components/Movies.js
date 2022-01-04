/*eslint-disable*/
import Movie from './Movie.js';
import {useState} from 'react';
import { Container, Row, Dropdown} from 'react-bootstrap';
import { Pagination } from 'react-bootstrap';


export default function Movies(props){
    
    
    function descendingOrder(){
      var movieArray = [...props.movie];
      var descendingArray = movieArray.sort((a,b)=>{
        return b.year-a.year;
      });
      props.setData(descendingArray);
    };

    function ascendingOrder(){
      var movieArray = [...props.movie];
      var ascendingArray = movieArray.sort((a,b)=>{
        return a.year-b.year;
      });
     props.setData(ascendingArray);
    };

    return(
      <>
 
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

        <Container className="cntCenter" >
        <Row >
          
        {/* {data && data.length ? data.map((val,i)=>{
            return(
              <Movie key={i} movie={data} i={i} />
            )
          }):null} */}
          {
            props.movie.map((val,i)=>{
              return(
                <Movie key={i} movie={props.movie} i={i} />
              )
            })
          }
        </Row> 
      </Container>
      <Pagination className="center">
        <Pagination.Prev onClick={props.previousPage}/>
        <Pagination.Item disabled={true}>{props.page}</Pagination.Item>
        <Pagination.Next onClick={props.nextPage} />
      </Pagination>
    
    </>
    )
}
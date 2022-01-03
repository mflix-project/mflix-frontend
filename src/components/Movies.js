/*eslint-disable*/
import Movie from './Movie.js';
import Page  from './Pagination';
import {useState} from 'react';
import {  Container, Row, Dropdown} from 'react-bootstrap';


export default function Movies(props){
    
    const [data, setData] = useState(props.movie);

    function descendingOrder(){
      var movieArray = [...props.movie];
      var descendingArray = movieArray.sort((a,b)=>{
        return b.year-a.year;
      });
      setData(descendingArray);
    };

    function ascendingOrder(){
      var movieArray = [...props.movie];
      var ascendingArray = movieArray.sort((a,b)=>{
        return a.year-b.year;
      });
     setData(ascendingArray);
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
        {
          data.map((val,i)=>{
            return(
              <Movie key={i} movie={data} i={i} />
            )
          })
        }
        </Row> 
      </Container>
      <Page />
    </>
    )
}
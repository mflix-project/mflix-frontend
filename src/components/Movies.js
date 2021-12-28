/*eslint-disable*/
import { useEffect, useState} from 'react';
import Loading from './Loading';
import Page  from './Pagination';
import movie from '../spiderman.jpg';
import { Col, Container, Row, Image , Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Movies(){
 
   const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
    axios("http://mflix-jun.herokuapp.com/api/theaters")
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
   
    return(
      <>
 
   
        <h1 style={{fontSize:25, color:'black', fontWeight:'bold',paddingLeft:'10%',paddingTop:'1%',marginBottom:0}}>Movies</h1>
        <p>
        {
        data.map((data,i)=>{
          return(
            <div key={i}>
            <p>{data.location._id}</p>
            </div>

          );
        })
        
        }</p>
        {/* <Container >
        <Row >
          <Col>
            <Link to='/movies/detail'>
              <Image width={150} height = {220} src={movie} rounded />
              <p className="movieName">Spider-Man</p>
              <p>2021</p>
            </Link>
          </Col>
          <Col>
            <Link to='/movies/detail'>
              <Image width={150} height = {220} src={movie} rounded />
              <p className="movieName">Spider-Man</p>
              <p>2021</p>
            </Link>
          </Col>
          <Col>
            <Link to='/movies/detail'>
              <Image width={150} height = {220} src={movie} rounded />
              <p className="movieName">Spider-Man</p>
              <p>2021</p>
            </Link>
          </Col>
          <Col>
            <Link to='/movies/detail'>
              <Image width={150} height = {220} src={movie} rounded />
              <p className="movieName">Spider-Man</p>
              <p>2021</p>
            </Link>
          </Col>
          <Col>
            <Link to='/movies/detail'>
              <Image width={150} height = {220} src={movie} rounded />
              <p className="movieName">Spider-Man</p>
              <p>2021</p>
            </Link>
          </Col>
       
          <Col>
            <Link to='/movies/detail'>
              <Image width={150} height = {220} src={movie} rounded />
              <p className="movieName">Spider-Man</p>
              <p>2021</p>
            </Link>
          </Col>
          <div class="w-100"></div>
          <Col>
            <Link to='/movies/detail'>
              <Image width={150} height = {220} src={movie} rounded />
              <p className="movieName">Spider-Man</p>
              <p>2021</p>
            </Link>
          </Col>
          <Col>
            <Link to='/movies/detail'>
              <Image width={150} height = {220} src={movie} rounded />
              <p className="movieName">Spider-Man</p>
              <p>2021</p>
            </Link>
          </Col>
          <Col>
            <Link to='/movies/detail'>
              <Image width={150} height = {220} src={movie} rounded />
              <p className="movieName">Spider-Man</p>
              <p>2021</p>
            </Link>
          </Col>
          <Col>
            <Link to='/movies/detail'>
              <Image width={150} height = {220} src={movie} rounded />
              <p className="movieName">Spider-Man</p>
              <p>2021</p>
            </Link>
          </Col>
          <Col>
            <Link to='/movies/detail'>
              <Image width={150} height = {220} src={movie} rounded />
              <p className="movieName">Spider-Man</p>
              <p>2021</p>
            </Link>
          </Col>
          <Col>
            <Link to='/movies/detail'>
              <Image width={150} height = {220} src={movie} rounded />
              <p className="movieName">Spider-Man</p>
              <p>2021</p>
            </Link>
          </Col>
        
        </Row> 
      </Container> */}
     
        <Page />
    </>
    )
}
/*eslint-disable*/
import { Col,Image  } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Movie(props){

 
    

    return(
        <Col>
            <Link className="linkStyle" to={'/movies/'+props.movie[props.i]._id}>
            <Image width={150} height = {220} src={props.movie[props.i].poster} rounded />
            <p className="movieName">{props.movie[props.i].title}</p>
            <p>{props.movie[props.i].year}</p>
            </Link>
        </Col>

    )
}
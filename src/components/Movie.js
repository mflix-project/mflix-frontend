/*eslint-disable*/
import { Col  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import noImage from './noImage.png'

export default function Movie(props){

    function poster(){
        if(props.movie[props.i].poster)
        {
            return props.movie[props.i].poster;
         }
        else
        {   
            return noImage;
        }
    }
    

    return(
        <>       
         {console.log("movie")}
        <Col>
            <Link className="linkStyle" to={'/movies/'+props.movie[props.i]._id} >
            <img width={150} height = {220} src={poster()} onError={(e)=>{e.target.onerror = null; e.target.src=noImage}}/>
            <p className="movieName">{props.movie[props.i].title}</p>
            <p>{props.movie[props.i].year}</p>
            </Link>
        </Col>
        </>

    )
}
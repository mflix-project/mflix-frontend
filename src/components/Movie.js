/*eslint-disable*/
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import noImage from "./noImage.png";
import { useSelector } from "react-redux";
export default function Movie(props) {
  let state = useSelector((state) => {
    return state;
  });

  function poster() {
    if (state.movies[props.i].poster) {
      return state.movies[props.i].poster;
    } else {
      return noImage;
    }
  }

  return (
    <>
      {console.log("movie")}
      <Col>
        <Link className="linkStyle" to={"/movies/" + state.movies[props.i]._id}>
          <img
            width={150}
            height={220}
            src={poster()}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = noImage;
            }}
          />
          <p className="movieName">{state.movies[props.i].title}</p>
          <p>{state.movies[props.i].year}</p>
        </Link>
      </Col>
    </>
  );
}

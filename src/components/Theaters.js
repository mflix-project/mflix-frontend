/*eslint-disable*/
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import { Card, Table, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import TheaterNavBar from "./TheaterNavBar";
import { useDispatch, useSelector } from "react-redux";
import { saveTheaters } from "../redux/slice/theaterSlice";

export default function Theaters() {
  const perPage = 12;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [render, setRender] = useState(false);
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  let url;
  let query = queryString.parse(location.search);

  if (query.city) {
    url = `https://mflix-james.herokuapp.com/api/theaters?page=${page}&perPage=${perPage}&city=${query.city}`;
  } else {
    url = `https://mflix-james.herokuapp.com/api/theaters?page=${page}&perPage=${perPage}`;
  }

  useEffect(() => {
    axios(url)
      .then((response) => {
        dispatch(saveTheaters(response.data));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return setRender(false);
  }, [page, error, render, state.theaters]);

  if (loading) return <Loading />;
  if (error)
    return (
      <Card className="p-3" style={{ width: "100rem" }}>
        <Card.Title>Something is wrong while fetching data</Card.Title>
        <Card.Text>{error.message}</Card.Text>
      </Card>
    );

  function previousPage() {
    if (page > 1) setPage(page - 1);
  }

  function nextPage() {
    setPage(page + 1);
  }

  return (
    <>
      <TheaterNavBar setRender={setRender} setPage={setPage} />
      <h1
        style={{
          fontSize: 25,
          color: "black",
          fontWeight: "bold",
          paddingLeft: "10%",
          paddingTop: "1%",
          marginBottom: 0,
        }}
      >
        Theaters
      </h1>
      {!Array.isArray(state.theaters) || state.theaters.length === 0 ? (
        <p className="non-found">
          No Results Found For "{queryString.parse(location.search).city}"
        </p>
      ) : (
        <div>
          <div className="tableStyle">
            <Table striped hover bordered className="mt-3">
              <thead>
                <tr>
                  <th className="col-1">Id</th>
                  <th className="col-3">Address</th>
                  <th className="col-2">City</th>
                  <th className="col-1">State</th>
                  <th className="col-1">Zip Code</th>
                </tr>
              </thead>
              <tbody>
                {state.theaters && state.theaters.length
                  ? state.theaters.map((val, i) => {
                      return (
                        <tr
                          key={i}
                          className="linkStyle"
                          onClick={() => {
                            navigate("/theaters/" + val._id);
                          }}
                        >
                          <td>{val.theaterId}</td>
                          <td>{val.location.address.street1}</td>
                          <td>{val.location.address.city}</td>
                          <td>{val.location.address.state}</td>
                          <td>{val.location.address.zipcode}</td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </Table>
          </div>
          <Pagination className="center">
            <Pagination.Prev onClick={previousPage} />
            <Pagination.Item disabled={true}>{page}</Pagination.Item>
            <Pagination.Next onClick={nextPage} />
          </Pagination>
        </div>
      )}
    </>
  );
}

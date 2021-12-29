/*eslint-disable*/
import { useState, useEffect } from "react";
import axios from "axios";
import Page from "./Pagination"
import Loading from "./Loading";
import { Form, Card } from "react-bootstrap";

export default function Theater(){

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

    return (
        <>
        <h1 style={{fontSize:25, color:'black', fontWeight:'bold',paddingLeft:'10%',paddingTop:'1%',marginBottom:0}}>Theaters</h1>
        
        <p>
        {
        data.map((data,i)=>{
          return(
            <div key={i}>
            <p>{data._id}</p>
            </div>

          );
        })
        
        }</p>
      
          <Page />
        </>

        )
}
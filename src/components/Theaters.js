/*eslint-disable*/
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import { Card,Table,Pagination} from "react-bootstrap";

export default function Theater(props){

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
      
        <div className="tableStyle">
          <Table striped hover bordered className='mt-3'>
            <thead>
              <tr>
                <th className='col-1'>Id</th>
                <th className='col-3'>Address</th>
                <th className='col-2'>City</th>
                <th className='col-1'>State</th>
                <th className='col-1'>Zip Code</th>
              </tr>
            </thead>
            <tbody>

            {data&&data.length? data.map((val,i)=>{
              return(
                 <tr>
                   <td>{val.theaterId}</td>
                   <td>{val.location.address.street1}</td>
                   <td>{val.location.address.city}</td>
                   <td>{val.location.address.state}</td>
                   <td>{val.location.address.zipcode}</td>
                 </tr> 
              )
            }):null
            }
            </tbody>
          </Table>
        </div>
      
        <Pagination className="center">
          <Pagination.Prev onClick={props.previousPage}/>
          <Pagination.Item disabled={true}>{props.page}</Pagination.Item>
          <Pagination.Next onClick={props.nextPage} />
        </Pagination>
         
        </>

        )
}
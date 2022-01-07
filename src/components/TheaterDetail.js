/*eslint-disable*/

import React from "react";
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import { useEffect, useState} from 'react';
import TheaterNavBar from './TheaterNavBar';
import { MapContainer, TileLayer, Marker ,Popup} from 'react-leaflet'
import { Card } from "react-bootstrap";
import { Container} from 'react-bootstrap';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png') 
});

export default function TheaterDetail(){

      const [data,setData] = useState(null);
      const [page, setPage] = useState(1);
      const [loading, setLoading] = useState(true);
      const [render,setRender] = useState(false);
      let {id2} = useParams();
   
    useEffect(() => {
       

        fetch(`https://mflix-jun.herokuapp.com/api/theaters/${id2}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(
                        'Could not fetch the requested theater info'
                    );
                }
                return res.json();
            })
            .then((result) => {
                if (result.hasOwnProperty('_id')) {
                   setData(result);
                } else {
                   setData(null);
                }
            })
            .catch((err) => {
                console.error(
                    `Something is wrong while fetching city info - ${err}`
                );
            })
            .finally(() => setLoading(false))
    }, [id2]);

   
    if (!loading && !data) {
        return (
            <Card className='p-3'>
                <Card.Title>Unable to find data with id: {id2}</Card.Title>
            </Card>
        );
    }
    if (loading) return (<Loading />);

       
   
    return(
        <>
         <TheaterNavBar setRender={setRender} setPage={setPage}/>     
         <Container className="p-3 w-50">
         <Card bg='light'>
                <Card.Body
                    style={{
                      
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    <Card.Title>{data.location.address.street1}</Card.Title>
                    <Card.Text>
                        {data.location.address.city}{', '}
                        {data.location.address.state}
                    </Card.Text>
                </Card.Body>
            </Card>
         <MapContainer
                className='mt-3'
                style={{ height: '400px' }}
                center={[
                    data.location.geo.coordinates[1],
                    data.location.geo.coordinates[0],
                ]}
                zoom={13}
                scrollWheelZoom={false}>
                <TileLayer 
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' 
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                <Marker
                    position={[
                        data.location.geo.coordinates[1],
                        data.location.geo.coordinates[0],
                    ]}>
                    <Popup>
                        {data.location.address.street1}, {data.location.address.city}, {data.location.address.state}
                    </Popup>
                </Marker>
            </MapContainer>
            </Container>
        </>
        
    )
}

import {Button, Card, Container,Row, Col, Image} from 'react-bootstrap';
import movie from '../spiderman.jpg';
export default function MovieDetail(){


    return (
        <>
      
        
        <Card className="p-4" style={{ width: '70%' }}>
          <Container >
            <Row>
              <Col className ="center" sm={3} >
                <Image variant="top" src={movie} width={150} height = {220} />
                </Col>
              <Col sm={9}>
                <h1 style={{ fontSize: "2rem" }}>The Birth of a Nation</h1>
                <div  className="p-3">
                  <p>Release date: 1915-03-03</p>
                  <p>Length: 165mins</p>
                  <p>Genres: Drama, History, Romance</p>
                </div>
              </Col>
            </Row>
          </Container>
      
       
         <Card.Body>
         <hr/>
           <Card.Title>Synopsis</Card.Title>
           <Card.Text>
           Two brothers, Phil and Ted Stoneman, visit their friends in Piedmont, South Carolina: the family Cameron. This friendship is affected by the Civil War, as the Stonemans and the Camerons must join up opposite armies. The consequences of the War in their lives are shown in connection to major historical events, like the development of the Civil War itself, Lincoln's assassination, and the birth of the Ku Klux Klan.
           <hr/>
           </Card.Text>
           <Card.Title>Cast</Card.Title>
           <Card.Text>
           Lillian Gish, Mae Marsh, Henry B. Walthall, Miriam Cooper
           <hr/>
           </Card.Text>
           <Card.Title>Direcotrs</Card.Title>
           <Card.Text>
           D.W. Griffith
           <hr/>
           </Card.Text>
           <Card.Title>Writers</Card.Title>
           <Card.Text>
           Thomas Dixon Jr. (adapted from his novel: "The Clansman: An Historical Romance of the Ku Klux Klan"), Thomas Dixon Jr. (play), Thomas Dixon Jr. (novel), D.W. Griffith, Frank E. Woods
           <hr/>
           </Card.Text>
           <Card.Title>Country</Card.Title>
           <Card.Text>
           USA
           </Card.Text>
           <div className ="center" >
           <Button variant="primary" href="/theaters">Check out Theaters</Button>
           </div> 
         </Card.Body>
       </Card>

       </> 
    )
}
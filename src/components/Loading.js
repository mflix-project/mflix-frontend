import { Col, Container, Row, Image } from 'react-bootstrap';
import loading from './loading-icon.gif';

export default function Loading(){

    return (
    <div style={{background:'white'}}>
        <Container  style={{ height: '85vh'}}>
            <Row>
                <Col>
                    <Image src={loading} style={{ width: '200px', paddingTop:'10%'}} />
                    <p>Loading...</p>
                </Col>
            </Row>
        </Container>
    </div>

    )

}
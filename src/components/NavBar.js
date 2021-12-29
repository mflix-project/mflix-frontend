import {Navbar, Container ,Nav, Form, FormControl, Button} from 'react-bootstrap';
import Logo from './Mflix-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar(){

    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                <Navbar.Brand href="/">
                <img
                    src={Logo}
                    width="60"
                    height="60"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    <Nav.Link href="/movies">Movie List</Nav.Link>
                    <Nav.Link href="/theaters">Theater List</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    </Nav>

                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </> 

    );
}


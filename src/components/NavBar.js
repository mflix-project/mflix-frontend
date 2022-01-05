/* eslint-disable */
import {Navbar, Container ,Nav, Form, FormControl, Button} from 'react-bootstrap';
import Logo from './Mflix-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function NavBar(props){
    
    const [searchString, setSearchString] = useState('');
    const navigate= useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/movies?title=${searchString}`);
        setSearchString('');
        props.setRender(true);
        props.setPage(1);
    };
   
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

                    <Form onSubmit={handleSubmit}className="d-flex" >
                    <FormControl
                        type="search"
                        placeholder="Title"
                        className="me-2"
                        aria-label="Search"
                        value={searchString}
                        onChange={(e)=>setSearchString(e.target.value)}
                    />
                    <Button  type='submit' variant="outline-dark">Search</Button>
                            
                    </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </> 

    );
}


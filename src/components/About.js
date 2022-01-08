/* eslint-disable*/
import { Card, Accordion, Badge } from 'react-bootstrap';
import {useState} from 'react';
import MovieNavBar from './MovieNavBar';

export default function About() {

    const [render,setRender] = useState(false);

    return (
        <>
        
            <MovieNavBar setRender={setRender} />   
        <div className="accordionStyle">
            <Accordion  defaultActiveKey="0" flush>

               <Card >
               <Card.Header >
                <Accordion.Item eventKey="1" as={Card.Header} variant='link'>
                    <Accordion.Header ><b>About Mflix</b></Accordion.Header>
                    <Accordion.Body>
                   The Mflix web app displays list of movies and theaters in the USA. 
                   You can find information about a movie that you're looking for by typing a title of the movie.
                   Also, you can check theaters in the USA, and we offer address of the theater with free map!
                    </Accordion.Body>
                </Accordion.Item>
                </Card.Header>
                </Card>
                </Accordion>

                <Accordion  defaultActiveKey="0" flush>
                <Card >
                    <Card.Header >
                        <Accordion.Item eventKey="1" as={Card.Header} variant='link'>
                            <Accordion.Header ><b>About me</b></Accordion.Header>
                                <Accordion.Body>
                        Hey, I'm Jun! I love programming and making something new and cool! Specifically, I'm quite interested in developing web app by React. Programming always makes me feel a sense of accomplishment and get motivated by learning new stuff.
                        <br />
                        <br />
                            <h5>Contact</h5>
                            <h5>
                                <a href='www.linkedin.com/in/seogjun-hong/'>
                                    <Badge bg='primary'> LinkedIn</Badge>
                                </a>
                                {'  '}

                                <a href='https://https://github.com/seog-jun'>
                                    <Badge bg='dark'>GitHub</Badge>
                                </a>
                                {'  '}

                                <a href='mailto:shong69@myseneca.ca'>
                                    <Badge bg='danger'>Mail</Badge>
                                </a>
                            </h5>
                                </Accordion.Body>
                         </Accordion.Item>
                    </Card.Header>
                </Card>
                </Accordion>
              
                <Accordion  defaultActiveKey="0" flush>
                <Card >
                    <Card.Header >
                        <Accordion.Item eventKey="1" as={Card.Header} variant='link'>
                            <Accordion.Header ><b>About stack that I'm interested in</b></Accordion.Header>
                                <Accordion.Body>
                        
                                <ul>
                                <li>
                                    Web Development{'  '}
                                    <Badge bg='primary'>HTML</Badge>{' '}
                                    <Badge bg='danger'>CSS</Badge>{' '}
                                    <Badge bg='warning'>JavaScript</Badge>{' '}
                                    <Badge bg='success'>Node.js</Badge>{' '}
                                    <Badge bg='primary'>Bootstrap</Badge>{' '}
                                    <Badge bg='primary'>
                                        Visual Studio Code
                                    </Badge>
                                </li>
                                <li>
                                Embedded Programming & Object Oriented Programming{'  '}
                                    <Badge bg='danger'>C</Badge>{' '}
                                    <Badge bg='warning'>C++</Badge>{' '}
                                    <Badge bg='secondary'>
                                        Visual Studio
                                    </Badge>{' '}
                                 
                                </li>
                                <li>
                                    Version Control &amp; Deployment{'  '}
                                    <Badge bg='danger'>Git</Badge>{' '}
                                    <Badge bg='dark'>GitHub</Badge>{' '}
                          
                                </li>
                            </ul>
                                </Accordion.Body>
                         </Accordion.Item>
                    </Card.Header>
                </Card>
                </Accordion>
            </div> 
             </>

        )
}
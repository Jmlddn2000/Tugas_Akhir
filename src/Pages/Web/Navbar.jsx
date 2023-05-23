import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/homeweb.css'
import Logo from '../../assets/img/Logo-SkyGames.png';

export default function Homepage({exportData}) {

  return (
    <div>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap" rel="stylesheet"></link>
        <div className='navbar'>
        <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="#">
      <img src={Logo} alt="SkyGames" style={{height:'auto', width:'auto'}}/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="container d-flex justify-content-center me-auto my-lg-0"> 
        <Link to='/' style={{ color:"white" ,padding: 20, textDecoration: "none"}} >Home</Link>
        <Link to='#ListGames2' style={{ color:"white", padding: 20, textDecoration: "none"}} >Games</Link>
        <Link to='#action2' style={{ color:"white",padding: 20, textDecoration: "none"}} >About</Link>
        <Link to='#action3' style={{ color:"white",padding: 20, textDecoration: "none"}} >Contact</Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button onClick={exportData} variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    </div>
  )
}

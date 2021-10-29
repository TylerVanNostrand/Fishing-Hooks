import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Header() {
    return (
          <header className='header text-center'>
        <title className='text-center'> Lt. Dan's  Bait  Tackle</title>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/Splash">Lt. Dan's Bait  Tackle</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Link className='btn btn-outline-secondary' to="/products" activeClassName="selected">Products</Link>&nbsp;
                            <br />
                            <Link className='btn btn-outline-secondary' to="/cart" activeClassName="selected">Your Cart</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <h1 className='text-center'>Lt. Dan's Bait and Tackle.</h1>
            <div className="d-flex">
            <img className="img-fluid mainImage" src="./Img/fishsign.jpg" class="rounded mx-auto d-block" alt=" " />
            </div>
        </header>
    )
}


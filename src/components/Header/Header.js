import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link className='me-md-2' href="#features"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></Nav.Link>
                        <Nav.Link className='me-md-2' href="#pricing">Services</Nav.Link>
                        <Nav.Link className='me-md-2' href="#deets">Blogs</Nav.Link>
                        <Nav.Link className='me-md-2' href="#memes">About</Nav.Link>
                        <Nav.Link className='me-md-2' href="#memes">Login</Nav.Link>
                        <NavDropdown  title="Profile" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
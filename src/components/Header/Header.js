import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo1.png';
import './Header.css';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
            <Container>
                <Navbar.Brand as={NavLink} to="/"><img className='brand-logo' src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={NavLink} className='mx-md-2' to="/"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></Nav.Link>
                        <Nav.Link as={NavLink} className='mx-md-2' to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={NavLink} className='mx-md-2' to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} className='mx-md-2' to="/checkout">Checkout</Nav.Link>
                        {user ?
                            <NavDropdown title={user.displayName} id="collasible-nav-dropdown">
                                <NavDropdown.Item  href="#action/3.4">Logout</NavDropdown.Item>
                            </NavDropdown>
                            :
                            <Nav.Link as={NavLink} className='mx-md-2' to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
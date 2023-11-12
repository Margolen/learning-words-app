import { NavLink } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      data-bs-theme="light"
      className="fs-5"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <NavLink className="nav-link" to="/">
            <img src="img/logo.png" alt="" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/game">
              Word Training
            </NavLink>
            <NavLink className="nav-link" to="/wordlist">
              Word List
            </NavLink>
          </Nav>
          <NavLink className="nav-link" to="/">
            Switch Theme
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

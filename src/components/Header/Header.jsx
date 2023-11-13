import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { ThemeContext } from '../../context/ThemeContext';
import { GlobeCentralSouthAsia } from 'react-bootstrap-icons';

function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={darkMode ? 'dark' : 'light'}
      data-bs-theme={darkMode ? 'dark' : 'light'}
      className="fs-5"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <GlobeCentralSouthAsia size={32} className="px-1" />
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
          <Nav>
            <Nav.Link to="/" onClick={toggleTheme}>
              Switch Theme
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

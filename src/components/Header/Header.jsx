import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

import { ThemeContext } from '../../context/ThemeContext';
import { GlobeCentralSouthAsia } from 'react-bootstrap-icons';

import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase';

function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();

  const onSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const onSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch(error => {
        // An error happened.
      });
  };

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
            <Nav.Link onClick={user ? onSignOut : onSignIn}>
              {user ? 'Sign Out' : 'Sign In'}
            </Nav.Link>
            <Nav.Link>
              {user && (
                <Image
                  style={{ width: '2rem' }}
                  src={user.photoURL}
                  className="d-none d-lg-block d-xl-block d-xl-block"
                  roundedCircle
                />
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

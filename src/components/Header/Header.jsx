import CSSModules from 'react-css-modules';
import { NavLink } from 'react-router-dom';
import styles from './style.module.scss';

function Header() {
  return (
    <header styleName="header">
      <nav>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
          to="/"
        >
          <img src="img/logo.png" alt="" />
        </NavLink>

        <NavLink to="/game">Word Training</NavLink>
        <NavLink to="/wordlist">Word List</NavLink>
        <NavLink to="/">Switch Theme</NavLink>
      </nav>
    </header>
  );
}

export default CSSModules(Header, styles);

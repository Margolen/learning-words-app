import CSSModules from "react-css-modules";
import styles from "./style.module.scss";

function Header() {
  return <nav styleName="header">
    <ul>
      <li><a href="#">Logo</a></li>
      <li><a href="#">Home</a></li>
      <li><a href="#">Word Training</a></li>
      <li><a href="#">Word List</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Switch Theme</a></li>
    </ul>
  </nav>;
}

export default CSSModules(Header, styles);
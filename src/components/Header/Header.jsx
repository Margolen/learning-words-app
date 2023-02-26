import CSSModules from 'react-css-modules';
import styles from './style.module.scss';

function Header() {
  return (
    <header styleName="header">
      <nav>
      
       
          <a href="#">Logo</a>
        
       
          <a href="#">Home</a>
        
        
          <a href="#">Word Training</a>
        
        
          <a href="#">Word List</a>
        
          <a href="#">Contact</a>
        
          <a href="#">Switch Theme</a>
        <</nav>>
    </header>
  );
}

export default CSSModules(Header, styles);

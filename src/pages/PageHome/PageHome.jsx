import CSSModules from 'react-css-modules';
import styles from './style.module.scss';

function Home() {
  return (
    <div styleName="home">
      <img src="img/flag.png" alt="flag of the UK" />
      <button>Get started</button>
    </div>
  );
}

export default CSSModules(Home, styles);

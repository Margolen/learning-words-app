import { useNavigate } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './style.module.scss';

function Home() {
  const navigate = useNavigate();
  return (
    <div styleName="home">
      <img src="img/flag.png" alt="flag of the UK" />
      <button onClick={() => navigate('game')}>Get started</button>
    </div>
  );
}

export default CSSModules(Home, styles);

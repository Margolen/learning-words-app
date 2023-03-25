import { useNavigate } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './style.module.scss';

function PageError() {
  const navigate = useNavigate();
  return (
    <div styleName="container">
      <h1>Page Error </h1>
      <button onClick={() => navigate('')} styleName="link_404">
        Go to Home
      </button>
    </div>
  );
}

export default CSSModules(PageError, styles);

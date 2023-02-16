import CSSModules from 'react-css-modules';
import styles from './style.module.scss';

function AddWord() {
  return (
    <tr>
      <td>
        <input type="text" />
      </td>
      <td>
        <input type="text" />
      </td>
      <td>
        <input type="text" />
      </td>

      <img styleName="img-row" src="./img/add.png" alt="" />
    </tr>
  );
}

export default CSSModules(AddWord, styles);

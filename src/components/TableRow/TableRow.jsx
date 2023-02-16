import CSSModules from 'react-css-modules';
import styles from './style.module.scss';

function TableRow(props) {
  const { english, transcription, russian } = props.word;
  return (
    <tr>
      <td>{english}</td>
      <td>{transcription}</td>
      <td>{russian}</td>
      <td>
        <img styleName="img-row" src="./img/close.png" alt="" />
        <img styleName="img-row" src="./img/edit.png" alt="" />
        <img styleName="img-row" src="./img/delete.png" alt="" />
      </td>
    </tr>
  );
}

export default CSSModules(TableRow, styles);

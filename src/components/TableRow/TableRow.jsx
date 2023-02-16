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
        <img src="./img/add.png" alt="" />
        <img src="./img/edit.png" alt="" />
        <img src="./img/delete.png" alt="" />
      </td>
    </tr>
  );
}

export default CSSModules(TableRow, styles);

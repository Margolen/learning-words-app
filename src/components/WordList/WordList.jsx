import CSSModules from 'react-css-modules';
import styles from './style.module.scss';

function WordList(props) {
  return (
    <table styleName="table">
      <th>English Word</th>
      <th>Transcrption</th>
      <th>Russian Word</th>
      <th></th>
      {props.words.map(word => {
        return (
          <tr>
            <td>{word.english}</td>
            <td>{word.transcription}</td>
            <td>{word.russian}</td>
            <td>
              <img src="./img/add.png" alt="" />
              <img src="./img/edit.png" alt="" />
              <img src="./img/delete.png" alt="" />
            </td>
          </tr>
        );
      })}
    </table>
  );
}

export default CSSModules(WordList, styles);

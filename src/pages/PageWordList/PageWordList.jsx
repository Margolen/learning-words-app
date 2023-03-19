import CSSModules from 'react-css-modules';
import TableRow from '../../components/TableRow/TableRow';
import AddWord from '../../components/AddWord/AddWord';
import styles from './style.module.scss';

function WordList(props) {
  const words = props.words;
  return (
    <table styleName="table">
      <th>English Word</th>
      <th>Transcrption</th>
      <th>Russian Word</th>
      <th></th>
      <AddWord />
      {words.map(word => {
        return <TableRow word={word} key={word.id} />;
      })}
    </table>
  );
}

export default CSSModules(WordList, styles);

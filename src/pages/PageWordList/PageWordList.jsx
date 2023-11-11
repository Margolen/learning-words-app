import TableRow from '../../components/TableRow/TableRow';
import AddWord from '../../components/AddWord/AddWord';

function WordList(props) {
  const words = props.words;
  return (
    <div className="container">
      <table className="table">
        <tr>
          <th>English Word</th>
          <th>Transcrption</th>
          <th>Russian Word</th>
          <th></th>
        </tr>
        <AddWord />
        {words.map(word => {
          return <TableRow word={word} key={word.id} />;
        })}
      </table>
    </div>
  );
}

export default WordList;

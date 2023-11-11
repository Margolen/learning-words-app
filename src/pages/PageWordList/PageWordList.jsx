import TableRow from '../../components/TableRow/TableRow';
import AddWord from '../../components/AddWord/AddWord';
import Table from 'react-bootstrap/Table';

function WordList(props) {
  const words = props.words;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>English Word</th>
          <th>Transcrption</th>
          <th>Russian Word</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <AddWord />
        {words.map(word => {
          return <TableRow word={word} key={word.id} />;
        })}
      </tbody>
    </Table>
  );
}

export default WordList;

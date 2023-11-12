import { useState } from 'react';
import TableRow from '../../components/TableRow/TableRow';
import AddWord from '../../components/AddWord/AddWord';
import Table from 'react-bootstrap/Table';

function WordList(props) {
  const [words, setWords] = useState(props.words);

  function handleRemoveWord(id) {
    setWords(words.filter(word => word.id !== id));
  }

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
          return (
            <TableRow
              word={word}
              key={word.id}
              onRemoveWord={handleRemoveWord}
            />
          );
        })}
      </tbody>
    </Table>
  );
}

export default WordList;
